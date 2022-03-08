import clientPromise from '../../lib/mongodb'
const ethers = require('ethers');

const handler = async (req, res) => {
  try {
    //get address from frontend
    const address = req.body.address;

    // connect to mongodb
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection('whitelist')

    // find address in mongodb
    const checkAddress = await collection.findOne({address: address});

    // if no address found, send response back to front end
    if (!checkAddress) return res.status(200).send('address not found');

    // if address, sign and send info back to front end
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY);
    // compute hash of the address
    const addressHash = ethers.utils.id(address);
    // sign the address
    const addressBytes = ethers.utils.arrayify(addressHash);
    const signature = await signer.signMessage(addressBytes);

    return res.status(200).json({signature: signature, hash: addressHash});

  } catch {
    res.status(500).send('error')
  }
}

export default handler;