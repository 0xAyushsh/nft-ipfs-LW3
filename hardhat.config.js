require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const POLYGON_RPC_URL = process.env.POLYGON_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const POLYGONSCAN_API_KEY=process.env.POLYGONSCAN_API_KEY;

console.log(POLYGONSCAN_API_KEY)

module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: POLYGON_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan : {
    polygonMumbai : {
      apiKey : POLYGONSCAN_API_KEY,
    }
  }
};