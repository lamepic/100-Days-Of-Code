import { MongoClient } from "mongodb";

export let db;

export const connectToDatabase = async (cb) => {
  if (db) {
    return;
  }

  const client = await new MongoClient("mongodb://127.0.0.1:27017").connect();
  db = client.db("react-blog");
  cb();
};
