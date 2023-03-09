import express from "express";
import { MongoClient } from "mongodb";
import cors from "cors";

const app = express();
const port = 3000;
const uri =
  "mongodb+srv://kookkie:kookkie123@cluster0.ghxoeka.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());
app.use(cors());

app.post("/api/user/create", (req, res) => {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect((err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database connection error" });
    }
    const collection = client.db("test").collection("users");
    collection.insertOne(req.body, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Database error" });
      }
      res.json({ message: "User created successfully" });
      client.close();
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
