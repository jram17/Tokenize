// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "./token.sol";

contract Main {
    struct TokenHolder {
        address holderAddress;
        string tokenName;
        string tokenSymbol;
        uint256 number;
        uint256 ethamount;
    }

    address payable public Owner;

    constructor() {
        Owner = payable(msg.sender);
    }

    string[] private tokenSymbolArray;
    mapping(string => TokenHolder) private accounts;
    mapping(string => Token) private tokens;
    mapping(address => bool) private hasDeployed;
    mapping(address => TokenHolder[]) private tokenAccounts;

    function mintTokens(
        string memory tokenName,
        string memory tokenSymbol,
        uint256 number
    ) public payable {
        TokenHolder storage holder = accounts[tokenSymbol];
        if (holder.holderAddress != address(0)) {
            require(
                msg.sender == holder.holderAddress,
                "Only the token holder can mint tokens."
            );
        } else {
            accounts[tokenSymbol] = TokenHolder({
                holderAddress: msg.sender,
                tokenName: tokenName,
                tokenSymbol: tokenSymbol,
                number: number,
                ethamount: 1
            });
            tokenAccounts[msg.sender].push(accounts[tokenSymbol]);
            tokenSymbolArray.push(tokenSymbol);

            tokens[tokenSymbol] = new Token(tokenName, tokenSymbol);
        }

        Token token = tokens[tokenSymbol];
        token.mintTokens(number);

        holder.number = number;
        Owner.transfer(msg.value);
    }

    function getTokenHolderDetails(
        string memory symbol
    )
        public
        view
        returns (
            address holderAddress,
            string memory tokenName,
            string memory tokenSymbol,
            uint256 number,
            uint256 amount
        )
    {
        TokenHolder storage holder = accounts[symbol];
        return (holder.holderAddress,holder.tokenName,holder.tokenSymbol,holder.number,holder.amount);
    }    
    function getTokenHolderDetailsWithAddress(address tokenAddress) public view returns (TokenHolder[] memory){
        return tokenAccounts[tokenAddress];
    }

    function showToken() public view returns (string[] memory) {
        return tokenSymbolArray;
    }
}
