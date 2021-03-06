const { utils } = require("ethers");

async function main() {
  const baseTokenURI = "ipfs://QmURNwHTkSJ4932zAyaQuE2XRPj5iLw84qmhFXQatBfHnf/";

  // Get contract that we want to deploy
  const contractFactory = await hre.ethers.getContractFactory(
    "UnicornNodeClub"
  );

  // Deploy contract with the correct constructor arguments
  const contract = await contractFactory.deploy(baseTokenURI);

  // Wait for this transaction to be mined
  await contract.deployed();

  // Get contract address
  console.log("Contract deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
