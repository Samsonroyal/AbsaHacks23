// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract LoanContract {
    address public admin;

    struct LoanApplication {
        address applicant;
        address bankAccount;
        uint loanAmount;
        bool approved;
        bool kycVerified;
    }

    LoanApplication[] public loanApplications;

    mapping(address => uint) public creditScores;

    constructor() {
        admin = msg.sender;
    }

    function disburseLoan(address applicant, address bankAccount, uint loanAmount) external {
        require(msg.sender == admin, "Only admin can disburse loans");
        require(creditScores[applicant] >= 700, "Applicant's credit score is too low");

        // Logic to disburse the loan to the provided bank account
        // ... (We need ABSA input to update the logic here)
    }

    function acceptOrDenyLoanApplication(uint applicationIndex, bool approved) external {
        require(msg.sender == admin, "Only admin can accept/deny loan applications");
        require(applicationIndex < loanApplications.length, "Invalid application index");

        LoanApplication storage application = loanApplications[applicationIndex];
        application.approved = approved;
    }

    function reverifyKYC(address applicant) external {
        require(msg.sender == admin, "Only COU admins can reverify KYC");

        // Logic to reverify the KYC of the applicant
        // ... (Add your logic here)
    }

    function filterApplicationsByCreditScore(uint minCreditScore) external view returns (LoanApplication[] memory) {
        LoanApplication[] memory result;
        uint resultCount = 0;

        for (uint i = 0; i < loanApplications.length; i++) {
            if (creditScores[loanApplications[i].applicant] >= minCreditScore) {
                result[resultCount] = loanApplications[i];
                resultCount++;
            }
        }

        assembly {
            mstore(result, resultCount)
        }

        return result;
    }

    function addCreditScore(address applicant, uint score) external {
        require(msg.sender == admin, "Only admin can add credit scores");
        creditScores[applicant] = score;
    }

    function submitLoanApplication(address bankAccount, uint loanAmount) external {
        require(creditScores[msg.sender] > 0, "Applicant's credit score not available");
        require(loanAmount > 0, "Loan amount must be greater than 0");

        LoanApplication memory application;
        application.applicant = msg.sender;
        application.bankAccount = bankAccount;
        application.loanAmount = loanAmount;

        loanApplications.push(application);
    }
}
