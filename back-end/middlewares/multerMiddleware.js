const multer = require('multer');
const fs = require('fs');
const mkdirp = require('mkdirp');

const storage = multer.diskStorage({
  destination: (req, _file, callback) => {

    const { _id } = req.user;

    fs.exists(`uploads/${_id}`, (exists) => {
      if (exists) return callback(null, `./uploads/${_id}`);

      mkdirp.sync(`uploads/${_id}`);
      return callback(null, `./uploads/${_id}`);
    })
  },
  filename: (_req, file, callback) => {
    return callback(null, `${file.originalname}-${Date.now()}.jpeg`)
  }
});

module.exports = multer({ storage });
