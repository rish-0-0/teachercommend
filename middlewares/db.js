import { MongoClient } from "mongodb";
import config from "../config.json";
const client = new MongoClient(config.MONGODB_CONNECTION_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db(config.DB);
  return next();
}