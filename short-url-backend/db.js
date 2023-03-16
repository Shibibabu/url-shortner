const redis = require("redis");

const client = redis.createClient({
  password: "drvTVFt2HQdbHW8WjNS8uHUBIdxcDGpQ",
  socket: {
    host: "redis-15766.c8.us-east-1-4.ec2.cloud.redislabs.com",
    port: 15766,
  },
});

module.exports = client;
