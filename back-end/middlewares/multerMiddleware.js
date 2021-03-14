const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');

const storageTypes = {
  local: multer.diskStorage({
    destination: (_req, _file, callback) => {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename: (_req, file, callback) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) return callback(err);

        file.key = `${hash.toString('hex')}-${file.originalname.split(' ').join('-')}`;

        file.location = `${process.env.APP_URL}/files/${file.key}`;
        console.log(file)
        return callback(null, file.key);
      });
    },
  }),

  s3: multerS3({
    s3: new aws.S3(),
    bucket: process.env.AWS_BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (_req, file, callback) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) return callback(err);

        const key = `${hash.toString('hex')}-${file.originalname.split(' ').join('-')}`;

        return callback(null, key);
      });
    },
  }),
};

const multerConfig = {
  dest: path.resolve(__dirname, '..', 'uploads'),

  storage: storageTypes[process.env.STORAGE_TYPE],

  limits: { fileSize: 2 * 1024 * 1024 },

  fileFilter: (req, file, callback) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
    ];
    if (allowedMimes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error('Invalid file type.'));
    }
  },
};

module.exports = multer(multerConfig);
