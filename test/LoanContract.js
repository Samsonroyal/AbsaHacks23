const { expect } = require("chai");
const { ethers, deployments } = require("hardhat");

describe("LoanContract", function () {
  let loanContract;
  let admin;
  let applicant;
  let bankAccount;

  before(async () => {
    // Deploy the contract using hardhat-deploy
    await deployments.fixture(); // This deploys the contract and sets it as the deployed contract
    loanContract = await ethers.getContract("LoanContract"); // Get the deployed contract instance

    admin = await loanContract.admin();
    applicant = await deployments.createFixture().then(() => ethers.provider.listAccounts())[1];
    bankAccount = await deployments.createFixture().then(() => ethers.provider.listAccounts())[2];
  });

  it("Should set the admin correctly", async () => {
    expect(admin).to.equal(await loanContract.admin());
  });

  it("Should add a credit score correctly", async () => {
    const score = 750;
    await loanContract.addCreditScore(applicant, score);

    expect(await loanContract.creditScores(applicant)).to.equal(score);
  });

  it("Should submit a loan application correctly", async () => {
    const loanAmount = 1000;
    await loanContract.submitLoanApplication(bankAccount, loanAmount);

    const application = await loanContract.loanApplications(0);

    expect(application.applicant).to.equal(applicant);
    expect(application.bankAccount).to.equal(bankAccount);
    expect(application.loanAmount).to.equal(loanAmount);
  });

  it("Should disburse a loan correctly", async () => {
    const loanAmount = 1000;
    const minCreditScore = 700;
    const score = 750;

    await loanContract.addCreditScore(applicant, score);
    await loanContract.submitLoanApplication(bankAccount, loanAmount);

    expect(await loanContract.creditScores(applicant)).to.be.at.least(minCreditScore);

    const success = await loanContract.disburseLoan(applicant, bankAccount, loanAmount);
    expect(success).to.be.true;
  });

  it("Should accept or deny a loan application correctly", async () => {
    await loanContract.submitLoanApplication(bankAccount, 1000);

    const approved = true;
    const applicationIndex = 0;

    await loanContract.acceptOrDenyLoanApplication(applicationIndex, approved);

    const application = await loanContract.loanApplications(applicationIndex);

    expect(application.approved).to.be.true;
  });

  it("Should reverify KYC correctly", async () => {
    const score = 750;
    await loanContract.addCreditScore(applicant, score);

    const success = await loanContract.reverifyKYC(applicant);
    expect(success).to.be.true;
  });

  it("Should filter applications by credit score correctly", async () => {
    const score1 = 750;
    const score2 = 680;
    const minCreditScore = 700;

    await loanContract.addCreditScore(applicant, score1);
    await loanContract.addCreditScore(applicant, score2);
    await loanContract.submitLoanApplication(bankAccount, 1000);

    const applications = await loanContract.filterApplicationsByCreditScore(minCreditScore);

    expect(applications.length).to.equal(1);
    expect(applications[0].applicant).to.equal(applicant);
  });
});
