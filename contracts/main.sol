// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./token.sol"; 

contract Main {

    struct TokenHolder {
        address holderAddress;
        string tokenName;
        string tokenSymbol;
        uint256 number;
        uint256 amount; 
    }

    string[] private tokenSymbolArray;
    mapping(string => TokenHolder) private accounts;
    mapping(string => Token) private tokens; 
    mapping(address => bool) private hasDeployed;

    function mintTokens(
        string memory tokenName,
        string memory tokenSymbol,
        uint256 number
    ) public {

        TokenHolder storage holder = accounts[tokenSymbol];
        if (holder.holderAddress != address(0)) {
            require(msg.sender == holder.holderAddress, "Only the token holder can mint tokens.");
        } else {
            accounts[tokenSymbol] = TokenHolder({
                holderAddress: msg.sender,
                tokenName: tokenName,
                tokenSymbol: tokenSymbol,
                number: number,
                amount: 0
            });
            tokenSymbolArray.push(tokenSymbol);

            tokens[tokenSymbol] = new Token(tokenName, tokenSymbol);
        }

        // Mint the specified number of tokens using the Token contract
        Token token = tokens[tokenSymbol];
        token.mintTokens(number);

        // Update the holder's number of tokens
        holder.number = number;
    }

    function getTokenHolderDetails(string memory symbol) public view returns (
        address holderAddress,
        string memory tokenName,
        string memory tokenSymbol,
        uint256 number,
        uint256 amount
    ) {
        TokenHolder storage holder = accounts[symbol];
        return (holder.holderAddress, holder.tokenName, holder.tokenSymbol, holder.number, holder.amount);
    }

    function showToken() public view returns (string[] memory) {
        return tokenSymbolArray;
    }


}
