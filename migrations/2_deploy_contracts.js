const Tether = artifacts.require("Tether")
const RWD = artifacts.require("RWD")
const DecentralBank = artifacts.require("DecentralBank")
module.exports = async (deployer) => {
    await deployer.deploy(Tether);
    const tether = await Tether.deployed();
    await deployer.deploy(RWD);
    const rwd = await RWD.deployed();
    await deployer.deploy(DecentralBank, rwd.address, tether.address);
}
