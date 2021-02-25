require('dotenv').config();

const config = {
  env: {
    API: process.env.API,
    PAYMENT_SIGNATURE: process.env.PAYMENT_SIGNATURE,
    PAYMENT_ID: process.env.PAYMENT_ID,
  },
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };
    return config;
  },
};

module.exports = config;
