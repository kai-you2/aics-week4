import { Controller } from "./controller";
import { Client } from "pg";
import { Router } from "express";
import { Icalculate, IRequest } from "./types";
import { RedisClientType } from "@redis/client";
class Service {
  controller: Controller;
  router: Router;

  constructor(db: Client, redis: RedisClientType) {
    this.controller = new Controller(db, redis);
    this.router = this.initRouter();
  }

  initRouter() {
    const router = Router();
    router.post("/calculate", async (req, res) => {
      await this.controller.save(req);
      const body: Icalculate = req.body;
      res.send({ result: body.num1 + body.num2 });
    });

    router.get("/hist_log", async (req, res) => {
      const logs = await this.controller.read();
      res.send(logs);
    });

    return router;
  }
}

export { Service };
