const masterConfig = {
  development: {
    cors_urls: ['http://localhost:3000'],
  }
};

module.exports = {
  cors_urls: masterConfig[process.env.ENV].cors_urls,
};
