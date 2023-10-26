# BlockFam: ABSA Loan Underwriting & Verification on Blockchain

BlockFam is a blockchain-powered plugin designed to streamline the loan underwriting and verification process for ABSA Bank. It leverages blockchain technology to facilitate tasks like loan disbursement, application approval/denial, KYC re-verification, and application filtering based on credit scores.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Running Unit Tests](#running-unit-tests)
- [Deployment](#deployment)
- [Testnet Setup](#testnet-setup)
- [Code Coverage](#code-coverage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Install Node.js and npm by [downloading and installing](https://nodejs.org/).
- Ethereum Development Environment: Set up an Ethereum development environment, such as [Hardhat](https://hardhat.org/).
- MetaMask: Ensure you have [MetaMask](https://metamask.io/) or a similar Ethereum wallet for testing deployments on testnets.

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/[your-username]/[your-repo-name].git
     ```
   
Change to the project directory:

  ```
   cd [your-repo-name]
  ```

Install project dependencies:


  ```
  npm install
  ```


## Usage
To use the BlockFam plugin, follow the instructions below:

Implement the plugin into ABSA's Internal Loan Processing Software.
Configure the network settings for your target Ethereum testnet in the hardhat.config.js file.
Running Unit Tests
Run the unit tests to ensure the smart contract functions correctly:

  ```bash

npx hardhat test
  ```

## Deployment
To deploy the smart contract to your target Ethereum testnet, use the following command:

  ```
npx hardhat run scripts/deploy.js --network Sepolia
  ```


## Testnet Setup


Before deploying to a testnet, make sure that you have test Ether in your deploying account. You can request test Ether from the testnet faucet specific to your chosen testnet.

## Code Coverage

You can check code coverage using the following command:

  ```
npx hardhat coverage
  ```

## Project Structure

The project structure follows these conventions:

- `/contracts`: Smart contract source code.
- `/scripts`: Deployment and testing scripts.
- `/test`: Unit tests.
- `/coverage`: Code coverage reports (generated after running tests).


## License
This project is licensed under the MIT License.

```
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
