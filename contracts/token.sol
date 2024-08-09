// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract Token is ERC20{
    constructor(string memory tokenName, string memory tokenSymbol) ERC20(tokenName, tokenSymbol) {

    }

    function mintTokens(uint256 number) public  {
        _mint(msg.sender, number * 10**decimals());
    }
}
