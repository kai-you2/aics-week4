import { Config } from "../types";
import { getConfig } from "./keyvault";

const processConfig = async () => {
  const config: Config = {
    db: {
      host: (await getConfig("storageHost")).value as string,
      database: "calculate",
      port: parseInt((await getConfig("storagePort")).value as string),
      user: (await getConfig("storageUser")).value as string,
      password: (await getConfig("storagePassword")).value as string,
      ssl: true,
    },
    redis: {
      hostname: (await getConfig("redisHostName")).value as string,
      password: (await getConfig("redisPassword")).value as string,
    },
  };

  // console.log(config);
  return config;
};

export { processConfig };
