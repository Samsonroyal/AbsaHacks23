// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract LoanContract {
    address public admin;

    struct LoanApplication {
        address applicant;
        uint loanAmount;
        uint applicantCreditScore;
        bool approved;
    }

    LoanApplication[] public loanApplications;

    uint public minimumCreditScoreRequirement;

    constructor(uint _minimumCreditScore) {
        admin = msg.sender;
        minimumCreditScoreRequirement = _minimumCreditScore;
    }

    function submitLoanApplication(
        uint loanAmount,
        uint applicantCreditScore
    ) external {
        require(
            applicantCreditScore >= minimumCreditScoreRequirement,
            "Credit score does not meet the minimum requirement"
        );

        LoanApplication memory application;
        application.applicant = msg.sender;
        application.loanAmount = loanAmount;
        application.applicantCreditScore = applicantCreditScore;

        loanApplications.push(application);
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this operation");
        _;
    }

    function filterAndSubmitApplications() external onlyAdmin {
        for (uint i = 0; i < loanApplications.length; i++) {
            if (
                loanApplications[i].applicantCreditScore >=
                minimumCreditScoreRequirement
            ) {
                loanApplications[i].approved = true;
            }
        }
    }

    function getApprovedApplications()
        external
        view
        returns (LoanApplication[] memory)
    {
        uint approvedCount = 0;

        for (uint i = 0; i < loanApplications.length; i++) {
            if (loanApplications[i].approved) {
                approvedCount++;
            }
        }

        LoanApplication[] memory approvedApplications = new LoanApplication[](
            approvedCount
        );
        uint index = 0;

        for (uint i = 0; i < loanApplications.length; i++) {
            if (loanApplications[i].approved) {
                approvedApplications[index] = loanApplications[i];
                index++;
            }
        }

        return approvedApplications;
    }
}
