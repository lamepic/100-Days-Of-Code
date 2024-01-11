import express from "express";
import { db, connectToDatabase } from "./db.js";

const app = express();
app.use(express.json());

app.get("/api/articles/:name", async (req, res) => {
  const { name } = req.params;

  //   const client = new MongoClient("mongodb://127.0.0.1:27017");
  //   await client.connect();

  //   const db = client.db("react-blog");
  const article = await db.collection("articles").findOne({ name });

  if (article) {
    res.json(article);
  } else {
    res.send("Not found!!!");
  }
});

app.put("/api/articles/:name/upvote", async (req, res) => {
  const { name } = req.params;

  //   const client = new MongoClient("mongodb://127.0.0.1:27017");
  //   await client.connect();

  //   const db = client.db("react-blog");
  await db.collection("articles").updateOne(
    { name },
    {
      $inc: { upvotes: 1 },
    }
  );
  const article = await db.collection("articles").findOne({ name });

  console.log(article);

  if (article) {
    res.send(`Article has ${article.upvotes} upvote(s)`);
  } else {
    res.send("Not found");
  }
});

app.post("/api/articles/:name/comments", async (req, res) => {
  const { name } = req.params;
  const { text, userName } = req.body;

  //   const client = await new MongoClient("mongodb://127.0.0.1:27017").connect();

  //   const db = client.db("react-blog");

  await db.collection("articles").updateOne(
    { name },
    {
      $push: { comments: { text, userName } },
    }
  );

  const article = await db.collection("articles").findOne({ name });

  if (article) {
    res.json(article);
  } else {
    res.send("Not found");
  }
});

connectToDatabase(() => {
  app.listen(8000, async () => {
    console.log("server is listening on port 8000");
  });
});
