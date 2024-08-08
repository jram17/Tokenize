import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

function MyToken({ tokendetails }) {
  return (
    <div className="flex flex-col gap-4 mt-11 overflow-scroll w-full">
      <div className="w-full flex items-center justify-center">
        <p className="text-5xl">My Tokens</p>
      </div>
      <div className="grid grid-cols-2 gap-5 w-full m-4">
        {tokendetails.map((token, index) => (
          <Card
            key={token.tokensymbol}
            className="flex flex-col gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <CardHeader>{token.tokenname}</CardHeader>
            <CardContent className="flex flex-col gap-3">
              <CardDescription>ETH Value: {token.ethvalue}</CardDescription>
              <CardDescription>
                Transaction Hash: {token.transactionhash}
              </CardDescription>
              <CardDescription>Address: {token.Address}</CardDescription>
              <CardDescription>
                Tokens Remaining: {token.tokensremaning}
              </CardDescription>
            </CardContent>
            <CardFooter>{/* Add your own actions here */}</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default MyToken;
