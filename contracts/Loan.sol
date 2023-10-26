// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract BankLoan {
    address public owner;

    event LoanApplied(address indexed applicant, uint amount, uint tenure);
    event LoanApproved(address indexed applicant);

    constructor() {
        owner = msg.sender;
    }

    function calculateEMI(uint _amount, uint _tenure) public pure returns (uint) {
        
        return (_amount * 1000) / _tenure;
    }

    enum LoanStatus {
        Pending,
        Approved
    }

    struct Loan {
        uint amount;
        uint interestRate;
        uint tenure;
        uint emi;

        LoanStatus status;
    }

    mapping(address => Loan) public loans;

    function applyLoan(uint _amount, uint _tenure) public {
        require(loans[msg.sender].status == LoanStatus.Pending, "Loan already applied or approved");
        loans[msg.sender] = Loan({
            amount: _amount,
            interestRate: 10,
            tenure: _tenure,
            emi: calculateEMI(_amount, _tenure),
            status: LoanStatus.Pending
        });
        emit LoanApplied(msg.sender, _amount, _tenure);
    }

    function approveLoan(address _applicant) public {
        require(msg.sender == owner, "Only the bank can approve loans");
        require(loans[_applicant].status == LoanStatus.Pending, "Loan is not pending approval");
        loans[_applicant].status = LoanStatus.Approved;
        emit LoanApproved(_applicant);
    }
}

