const BankLoan = artifacts.require("BankLoan");

contract("BankLoan", (accounts) => {
  const owner = accounts[0];
  const applicant = accounts[1];
  const amount = 1000;
  const tenure = 12;

  it("should apply for a loan", async () => {
    const bankLoan = await BankLoan.deployed();

    // Apply for a loan
    await bankLoan.applyLoan(amount, tenure, { from: applicant });

    // Check if loan is applied
    const loan = await bankLoan.loans(applicant);
    assert.equal(loan.amount, amount, "Loan amount is incorrect");
    assert.equal(loan.tenure, tenure, "Loan tenure is incorrect");
    assert.equal(loan.status, 0, "Loan status is not pending");
  });

  it("should not apply for a loan if already applied or approved", async () => {
    const bankLoan = await BankLoan.deployed();

    // Try to apply for a loan again
    try {
      await bankLoan.applyLoan(amount, tenure, { from: applicant });
      assert.fail("Expected an error but did not get one");
    } catch (error) {
      assert.include(
        error.message,
        "Loan already applied or approved",
        "Error message should contain 'Loan already applied or approved'"
      );
    }
  });
});