import clientPromise from "../../lib/mongodb";

const handler = async (req, res) => {
  try {
    // get address from frontend
    const { address } = req.body;

    // connect to mongodb
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection("whitelist");

    // check to see if address is in mongodb
    const checkAddress = await collection.findOne({ address: address });

    if (checkAddress) {
      return res.status(200).send("address whitelisted");
    } else {
      res.status(200).send("address not found");
    }
  } catch {
    res.status(500).send("error");
  }
};

export default handler;
