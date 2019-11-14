const RockwoodToken = artifacts.require("./RockwoodToken.sol");

module.exports = function (deployer, network, accounts) {
		console.log(`Accounts: ${accounts}`);

		let rockwoodToken = null;

		const owner = accounts[0];
		const admin = accounts[1];

		return deployer.deploy(
			RockwoodToken, admin,  { from: owner }
		).then(() => {
			return RockwoodToken.deployed().then(instance => {
				rockwoodToken = instance;
				console.log(`RockwoodToken deployed at \x1b[36m${instance.address}\x1b[0m`)
			});
		});
};		
