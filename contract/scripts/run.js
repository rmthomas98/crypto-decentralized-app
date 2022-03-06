const { utils } = require("ethers");
const { hrtime } = require("process");

const main = async () => {
  const baseTokenURI = "ipfs://QmZbWNKJPAjxXuNFSEaksCJVd1M6DaKQViJBYPK2BdpDEP/";

  // Get owner/deployer's wallet address
  const [owner] = await hre.ethers.getSigners();

  // Get contract that we want to deploy
  const contractFactory = await hre.ethers.getContractFactory("UnicornNodes");

  // Deploy contract with the correct constructor arguments
  const contract = await contractFactory.deploy(baseTokenURI);

  // wait for this transaction to be mined
  await contract.deployed();

  // get contract address
  console.log("Contract deployed to: ", contract.address);
};

// call the function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
