import { MongoClient, ObjectId } from "mongodb";

async function Handler(req, res) {
  if (req.method === "POST") {
    const id = req.body.id;
    const data = {
      bWriter: req.body.bWriter,
      bName: req.body.bName,
      Parts: req.body.Parts,
      PrintNum: req.body.PrintNum,
      PrintYear: req.body.PrintYear,
      Publisher: req.body.Publisher,
      About: req.body.About,
      Cover: req.body.Cover,
      Library: req.body.Library,
      Shelf: req.body.Shelf,
      bNum: req.body.bNum,
      Notes: req.body.Notes,
    };
    try {
      const client = await MongoClient.connect(
        "mongodb+srv://sakodatabase:EYmcsgXd4txjPb9L@cluster1.ksjs9y2.mongodb.net/shawkatData?retryWrites=true&w=majority"
      );
      const db = client.db();
      const shawkatDataCollection = db.collection("data2");
      const result = await shawkatDataCollection.updateOne(
        { _id: ObjectId(id) },
        {
          $set: data,
        }
      );
      console.log(result);
      client.close();
      res.status(201).json({ message: "Successfully Data Updated.." });
    } catch (error) {
      res
        .status(500)
        .json({ error, message: "Not successfully Data Updated.." });
    }
  }
}
export default Handler;
