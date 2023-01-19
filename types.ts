export interface Icalculate {
  num1: number;
  num2: number;
}

export interface IRequest {
  body: object;
  ip: string;
  method: string;
  path: string;
  timestamp: number;
}

export interface Config {
  db: DatabaseKey;
  redis: RedisKey;
}

export interface DatabaseKey {
  host: string;
  user: string;
  password: string;
  port: number;
  database: string;
  ssl: boolean;
}

export interface RedisKey {
  hostname: string;
  password: string;
}
