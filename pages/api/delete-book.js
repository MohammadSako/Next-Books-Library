import { MongoClient, ObjectId } from "mongodb";

async function Handler(req, res) {
  if (req.method === "POST") {
    const data = req.body.id;
    try {
      const client = await MongoClient.connect(
        "mongodb+srv://sakodatabase:EYmcsgXd4txjPb9L@cluster1.ksjs9y2.mongodb.net/shawkatData?retryWrites=true&w=majority"
        );
      const db = client.db();
      const shawkatDataCollection = db.collection("data2");
      const result = await shawkatDataCollection.deleteOne({ _id: ObjectId(data) });
      client.close();
      res.status(201).json({ message: "Data deleted from the server.." });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error, message: "Data not deleted from the server.." });
    }
    
  }
}
export default Handler;
