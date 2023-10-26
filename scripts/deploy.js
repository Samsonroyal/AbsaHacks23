const hre = require("hardhat");

async function main() {
  const minimumCreditScore = 720;
  const loanAmount = hre.ethers.parseEther("0.002");
  const creditScore = 890;

  const LoanContract = await hre.ethers.getContractFactory("LoanContract");
  const loanContract = await LoanContract.deploy(minimumCreditScore);

  console.log(`LoanContract deployed with loan amount ${loanAmount}ETH and credit score ${creditScore}`);

  // The contract is NOT deployed yet; we must wait until it is mined
  const result = await loanContract.minimumCreditScore();
  console.log("Result of Analysis:", result);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
