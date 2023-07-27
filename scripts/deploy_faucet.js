const hre = require("hardhat");

// async function main() {

//   const url = process.env.SEPOLIA_ALCHEMY_URL;
//   let artifacts = await hre.artifacts.readArtifact("Faucet");
//   const provider = new ethers.providers.JsonRpcProvider(url);
//   let privateKey = process.env.SEPOLIA_PRIVATE_KEY;
//   let wallet = new ethers.Wallet(privateKey, provider);

//   // Create an instance of a Faucet Factory
//   let factory = new ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet);
//   let faucet = await factory.deploy();

//   console.log("Faucet address:", faucet.address);
//   await faucet.deployed();
// }

async function main() {

  const faucet = await hre.ethers.deployContract("Faucet");
  await faucet.waitForDeployment();

  console.log("Faucet:", faucet);

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});