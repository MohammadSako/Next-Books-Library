import { MongoClient } from "mongodb";

async function Handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);

    try {
      const client = await MongoClient.connect(
        "mongodb+srv://sakodatabase:EYmcsgXd4txjPb9L@cluster1.ksjs9y2.mongodb.net/shawkatData?retryWrites=true&w=majority"
        );
      const db = client.db();
      const shawkatDataCollection = db.collection("data2");
      const result = await shawkatDataCollection.insertOne(data);
      client.close();
      res.status(201).json({ message: "Data sent to the server.." });
    } catch (error) {
      console.log(error);
    }
  }
}
export default Handler;