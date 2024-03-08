import dotenv from "dotenv";
import knex from "knex";
const knexfile = require("../../../knexfile");
dotenv.config();

export const db = knex(knexfile.development);

export const serverConfig: ServerConfig = {
  port: Number(process.env.PORT),
  dbUrl: process.env.DATABASE_URL as string,
  db: db,

};

type ServerConfig = {
  port: number;
  dbUrl: string;
  db: typeof db;

};

export type DatabaseType = typeof db;