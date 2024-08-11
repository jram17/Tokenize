const details = {
    "address": "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    "abi": [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "Owner",
            "outputs": [
                {
                    "internalType": "address payable",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "symbol",
                    "type": "string"
                }
            ],
            "name": "getTokenHolderDetails",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "holderAddress",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "tokenName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "tokenSymbol",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "number",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "ethamount",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "tokenAddress",
                    "type": "address"
                }
            ],
            "name": "getTokenHolderDetailsWithAddress",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "holderAddress",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "tokenName",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "tokenSymbol",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "number",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "ethamount",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct Main.TokenHolder[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "tokenName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "tokenSymbol",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "number",
                    "type": "uint256"
                }
            ],
            "name": "mintTokens",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "showToken",
            "outputs": [
                {
                    "internalType": "string[]",
                    "name": "",
                    "type": "string[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
}

export default details