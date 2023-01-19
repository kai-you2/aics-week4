import { RedisClientType } from "@redis/client";
import initApp from "./app";
import { initDB } from "./utils/db";
import { initRedis } from "./utils/redis";

const port = process.env.PORT || 3000;
// init everything here
const run = async () => {
  // const config = await processConfig();
  const db = await initDB();
  const redis = (await initRedis()) as RedisClientType;
  const app = await initApp(db, redis);

  try {
    app.listen(port);
    console.log(`The server is listing at port ${port}`);
  } catch (error: any) {
    console.log(`There is error connecting to the server`);
  }
};

run();
