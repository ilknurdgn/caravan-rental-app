const Minio = require('minio');
require('dotenv').config();
const minioClient = new Minio.Client({
  endPoint: '89.252.131.245',
  port: 9000,
  useSSL: false,
  accessKey: process.env.MINIO_ACCESS_KEY,
  secretKey: process.env.MINIO_SECRET_KEY,
  pathStyle: true,
});

minioClient.bucketExists('vanca', function (err, exists) {
  if (err) {
    return console.log(err);
  }
  if (exists) {
    console.log('Bucket exists.');
  } else {
    console.log('Bucket does not exist.');
  }
});

module.exports = minioClient;
