// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./token.sol"; 

contract Main {

    struct TokenHolder {
        address holderAddress;
        string tokenName;
        string tokenSymbol;
        uint256 number;

    }


    Token public token;
    TokenHolder public tokenHolder;
    mapping(address => bool) private hasDeployed;

    constructor() {

        require(!hasDeployed[msg.sender], "You can only deploy the contract once.");

        string memory name = "MyToken";
        string memory symbol = "MTK";
        token = new Token(name, symbol);

        hasDeployed[msg.sender] = true;

        tokenHolder = TokenHolder({
            holderAddress: msg.sender,
            tokenName: name,
            tokenSymbol: symbol,
            number: 0

        });
    }

    function mintTokens(uint256 number) public {
        require(msg.sender == tokenHolder.holderAddress, "Only the deployer can mint tokens.");
        token.mintTokens(number);
        tokenHolder.number = number;

    }

    function getTokenHolder() public view returns (TokenHolder memory) {
        return tokenHolder;
    }
}
