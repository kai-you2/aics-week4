import { RedisClientType } from "@redis/client";
import express from "express";
import { Client } from "pg";
import { json } from "stream/consumers";
import { IRequest } from "./types";

class Controller {
  db: Client;
  redis: RedisClientType;
  log_name: string = "logs";

  constructor(db: Client, redis: RedisClientType) {
    this.db = db;
    this.redis = redis;
  }

  async refresh(): Promise<void> {
    // if the latest data equal to the latest data in logs, then we know we are good
    if (
      (await this.redis.lRange(this.log_name, -1, -1))[0] ===
      (await this.redis.get("last_data"))
    ) {
      console.log(await this.redis.lRange(this.log_name, 0, -1));
      return;
    }
    console.log("Need Refreshing");
    // if there's problem then we need to query the database, and then replace the original logs
    const datas: any = await this.db.query(
      "SELECT * FROM log_history ORDER BY timestamp DESC LIMIT 5"
    );
    console.log(datas);
    // delete the original logs
    await this.redis.del(this.log_name);

    for (let row of datas.rows) {
      await this.redis.rPush(this.log_name, JSON.stringify(row));
    }
  }

  async read() {
    // console.log(await this.redis.get("last_data"));
    // first refresh the log, make sure we see the latest five records
    await this.refresh();

    // get the logs from start to the end
    const logs = await this.redis.lRange(this.log_name, 0, -1);

    return logs.map((log) => JSON.parse(log));
  }

  async save(req: express.Request): Promise<void> {
    const data: IRequest = {
      method: req.method,
      ip: req.ip,
      path: req.path,
      body: req.body,
      timestamp: new Date().valueOf(),
    };
    try {
      // this is to set the last data, so when we read we can know whether we need to refresh the key or not!!!
      await this.redis.set("last_data", JSON.stringify(data));
      await this.db.query(
        `INSERT INTO "log_history"("timestamp", "method", "ip", "path", "body") VALUES($1, $2, $3, $4, $5)`,
        [data.timestamp, data.method, data.ip, data.path, data.body]
      );
    } catch (error: any) {
      console.log(error);
    }
  }
}

export { Controller };
