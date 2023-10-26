# BlockFam: ABSA Loan Underwriting & Verification on Blockchain

BlockFam is a blockchain-powered plugin designed to streamline the loan underwriting and verification process for ABSA Bank. It leverages blockchain technology to facilitate tasks like loan disbursement, application approval/denial, KYC re-verification, and application filtering based on credit scores.

## Features
- Credit Loan Applicant's bank account
- Accept Or Deny Loan application
- Filter loan applications using credit score

## Table of Contents

- [BlockFam: ABSA Loan Underwriting \& Verification on Blockchain](#blockfam-absa-loan-underwriting--verification-on-blockchain)
  - [Features](#features)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
    - [Clone this repository:](#clone-this-repository)
      - [Use the command below:](#use-the-command-below)
      - [Open with Github Desktop:](#open-with-github-desktop)
    - [Install project dependencies:](#install-project-dependencies)
  - [Usage](#usage)
  - [Deployment](#deployment)
  - [Testnet Setup](#testnet-setup)
  - [Code Coverage](#code-coverage)
  - [Project Structure](#project-structure)
  - [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Install Node.js and npm by [downloading and installing](https://nodejs.org/).
- Ethereum Development Environment: Set up an Ethereum development environment, such as [Hardhat](https://hardhat.org/).
- MetaMask: Ensure you have [MetaMask](https://metamask.io/) or a similar Ethereum wallet for testing deployments on testnets.

## Installation

### Clone this repository:
#### Use the command below:
  ```
   git clone https://github.com/Samsonroyal/AbsaHacks23.git
    
  ```
   
#### Open with Github Desktop:
  
  Alternatively, you can clone the repository using Github Desktop. Click on the "Code" button at the top of the repository and select "Open with Github Desktop" to clone the repository to your local machine.

### Install project dependencies:


  ```
  npm install
  ````

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
