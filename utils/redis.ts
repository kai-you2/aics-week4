import * as redis from "redis";
import { Config } from "../types";

// const config = {
//   hostname: "bootcampkaistorage.redis.cache.windows.net",
//   password: "dc0nH90HtMTxfQka19U5hd06aZzRVEeeqAzCaOjKB3o=",
// };

const Testconfig: Config = {
  db: {
    host: "bootcampkaistorage.postgres.database.azure.com",
    // Do not hard code your username and password.
    // Consider using Node environment variables.
    user: "kai_you",
    password: "Wearelose0!",
    database: "calculate",
    port: 5432,
    ssl: true,
  },
  redis: {
    hostname: "bootcampkaistorage.redis.cache.windows.net",
    password: "dc0nH90HtMTxfQka19U5hd06aZzRVEeeqAzCaOjKB3o=",
  },
};

const initRedis = async (config?: Config) => {
  const connectRedis = redis.createClient({
    // rediss for TLS
    url: "rediss://" + Testconfig.redis.hostname + ":6380",
    password: Testconfig.redis.password,
  });

  try {
    await connectRedis.connect();
    console.log("Connect to Redis!!!");
  } catch (err: any) {
    console.log(err);
  }

  return connectRedis;
};

export { initRedis };
