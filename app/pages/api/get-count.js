import clientPromise from "../../lib/mongodb";

const handler = async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection("whitelist");

    const addresses = await collection.find({}).toArray();

    return res.status(200).send(addresses.length);
  } catch {
    res.status(500).send("error");
  }
};

export default handler;
