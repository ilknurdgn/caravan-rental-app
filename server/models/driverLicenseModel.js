const mongoose = require('mongoose');

const driverLicenseSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    frontPic: {
      type: String,
      default: '',
    },
    backPic: {
      type: String,
      default: '',
    },
    // number: {
    //   type: String,
    //   required: true,
    // },
    // licenseClass: {
    //   type: String,
    //   required: true,
    // },
    // expiryDate: {
    //   type: Date,
    //   required: true,
    // },
    // cityOfIssue: {
    //   type: String,
    //   required: true,
    // }
  },
  { timestamps: true }
);

module.exports = mongoose.model('DriverLicense', driverLicenseSchema);
