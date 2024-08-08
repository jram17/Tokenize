// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Token is ERC20, Ownable {
    constructor(string memory tokenName, string memory tokenSymbol) ERC20(tokenName, tokenSymbol){
//  Ownable(msg.sender)
    }

    function mintTokens(uint256 number) public onlyOwner {
        _mint(msg.sender, number * 10**decimals());
    }
}
