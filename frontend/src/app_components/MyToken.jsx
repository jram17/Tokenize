import React from 'react';

function MyToken({ tokendetails }) {
  return (
    <div>
      {tokendetails.map((token, index) => (
        <div key={index} className="token-details">
          <h2>
            {token.tokenname} ({token.tokensymbol})
          </h2>
          <p>ETH Value: {token.ethvalue}</p>
          <p>Transaction Hash: {token.transactionhash}</p>
          <p>Address: {token.Address}</p>
          <p>Tokens Remaining: {token.tokensremaning}</p>
        </div>
      ))}
    </div>
  );
}

export default MyToken;
