require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/O-Rw2ixDXkLqjZnNa5sFg1pH8EKvvU9U",
      accounts: [process.env.RINKEBY_KEY],
    },
  },
};
