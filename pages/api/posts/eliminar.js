import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "bson";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const data = req.body;
  const { id } = data;

  const client = await clientPromise;
  const db = client.db("anje");
  const result = await db
    .collection("posts")
    .deleteOne({ _id: new ObjectId(id) });
  res.json({ message: "Eliminado com sucesso" });
}

export default handler;
