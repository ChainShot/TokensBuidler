const { assert } = require("chai");

describe("Akoin", function() {
  let totalSupply;
  let akoin;
  let deployer;
  beforeEach(async () => {
    deployer = ethers.provider.getSigner(0);
    totalSupply = (100n * (10n ** 18n)).toString();
    const Akoin = await ethers.getContractFactory("Akoin");
    akoin = await Akoin.deploy(totalSupply);

    await akoin.deployed();
  });

  it("should be able to mint ourselves a bunch of Akoin", async function() {
    const address = await deployer.getAddress();
    const balance = await akoin.balanceOf(address);
    assert.equal(balance, totalSupply);
  });

  describe('transfer it to a friend', () => {
    let bob;
    beforeEach(async () => {
      bob = ethers.provider.getSigner(1);
      const bobAddr = await bob.getAddress();
      const amount = (50n * (10n ** 18n)).toString();

      await akoin.transfer(bobAddr, amount);
    });

    it("should be take some of the deployers akoin", async function() {
      const address = await deployer.getAddress();
      const balance = await akoin.balanceOf(address);
      const amount = (95n * (10n ** 18n)).toString();
      assert.equal(balance.toString(), amount);
    });

    it("should transfer bob some akoin", async function() {
      const address = await bob.getAddress();
      const balance = await akoin.balanceOf(address);
      const amount = (5n * (10n ** 18n)).toString();
      assert.equal(balance.toString(), amount);
    });
  });
});
