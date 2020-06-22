// We require the Buidler Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
// When running the script with `buidler run <script>` you'll find the Buidler
// Runtime Environment's members available in the global scope.
const bre = require("@nomiclabs/buidler");

async function main() {
  const Akoin = await ethers.getContractFactory("Akoin");
  const amount = (150n * (10n ** 18n)).toString();
  const akoin = await Akoin.deploy(amount);

  await akoin.deployed();

  console.log(`Akoin deployed at ${akoin.address}!`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
