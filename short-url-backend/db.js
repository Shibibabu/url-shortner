const redis = require("redis");

//let urlShort = redis.createClient();

// const client = redis.createClient({
//   socket: {
//     host: "127.0.0.1",
//     port: "6379",
//   },
// });

const client = redis.createClient({
  password: "drvTVFt2HQdbHW8WjNS8uHUBIdxcDGpQ",
  socket: {
    host: "redis-15766.c8.us-east-1-4.ec2.cloud.redislabs.com",
    port: 15766,
  },
});

// const url = process.env.REDIS_URL || 'redis://localhost:6379';
// const client = redis.createClient({
//     url
// });

module.exports = client;
