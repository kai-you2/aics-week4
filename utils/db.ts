import pg from "pg";
import { getConfig } from "./keyvault";
import { Config } from "../types";
// const config = {
//   host: "bootcampkaistorage.postgres.database.azure.com",
//   // Do not hard code your username and password.
//   // Consider using Node environment variables.
//   user: "kai_you",
//   password: "Wearelose0!",
//   database: "calculate",
//   port: 5432,
//   ssl: true,
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
const initDB = async (config?: Config) => {
  const connectDB = new pg.Client(Testconfig.db);

  connectDB.connect((err: any) => {
    if (err) throw err;
    else {
      // queryDatabase();
      console.log("Connect successful");
    }
  });

  return connectDB;
};

export { initDB };
