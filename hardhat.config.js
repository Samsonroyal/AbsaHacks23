require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

// Go to https://alchemy.com, sign up, create a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY; // Remove the quotes

// Replace this private key with your Sepolia account private key
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY; // Remove the quotes

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`, // Use the variable directly
      accounts: [SEPOLIA_PRIVATE_KEY] // Use the variable directly
    }
  }
};
