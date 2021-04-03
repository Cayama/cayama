const fs = require('fs').promises;
const path = require('path');
const aws = require('aws-sdk');

module.exports = async ({ productsImgKeys, productSizeTableImgKeys }) => {
  if (process.env.STORAGE_TYPE === 's3') {
    const s3 = new aws.S3();

    Promise.all([
      await productsImgKeys.forEach(async (key) => await s3
        .deleteObject({
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: key,
        })
        .promise()
      ),

      await productSizeTableImgKeys.forEach(async (key) => await s3
        .deleteObject({
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: key,
        })
        .promise()
      ),
    ])
    
  } else {
    productsImgKeys.forEach((key) => fs.unlink(
      path.resolve(__dirname, '..', 'uploads', key),
    ))
    
    return productSizeTableImgKeys.forEach((key) => fs.unlink(
      path.resolve(__dirname, '..', 'uploads', key),
    ))
  }
}
