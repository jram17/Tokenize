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

    mapping(address => TokenHolder) private accounts;
    mapping(address => bool) private hasDeployed;

    Token public token;

    constructor() {
        require(!hasDeployed[msg.sender], "You can only deploy the contract once.");

        string memory name = "MyToken";
        string memory symbol = "MTK";
        token = new Token(name, symbol);

        hasDeployed[msg.sender] = true;

        accounts[msg.sender] = TokenHolder({
            holderAddress: msg.sender,
            tokenName: name,
            tokenSymbol: symbol,
            number: 0
        });
    }

    function mintTokens(uint256 number) public {
        require(msg.sender == accounts[msg.sender].holderAddress, "Only the token holder can mint tokens.");
        token.mintTokens(number);
        accounts[msg.sender].number = number;
    }

    function getTokenHolderDetails(address account) public view returns (
        address holderAddress,
        string memory tokenName,
        string memory tokenSymbol,
        uint256 number
    ) {
        TokenHolder storage holder = accounts[account];
        return (holder.holderAddress, holder.tokenName, holder.tokenSymbol, holder.number);
    }
}
