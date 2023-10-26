const { expect } = require("chai");

describe('LoanContract', () => {
  let loanContract;
  let owner;
  let applicant;
  let bankAccount;

  before(async () => {
    const LoanContract = await ethers.getContractFactory("LoanContract");
    loanContract = await LoanContract.deploy(750); // Deploy the contract with the required minimumCreditScore
    [owner, applicant, bankAccount] = await ethers.getSigners();
  });

  it('should deploy the contract', async () => {
    expect(loanContract.address).to.not.equal(0);
  });

  it('should submit a loan application', async () => {
    const loanAmount = 1000;
    const applicantCreditScore = 750;

    await loanContract.connect(applicant).submitLoanApplication(loanAmount, applicantCreditScore);

    const application = await loanContract.loanApplications(0);

    expect(application.applicant).to.equal(applicant.address);
    expect(application.loanAmount).to.equal(loanAmount);
    expect(application.applicantCreditScore).to.equal(applicantCreditScore);
  });


});
