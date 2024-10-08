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
    <div className="flex flex-col  gap-20  w-full">
      <div className="w-full flex items-center justify-around">
        <p className="text-5xl font-faustina mt-6">My Tokens</p>
      </div>
      {tokendetails.length === 0 && (
        <div className="grid grid-cols-2 gap-5 m-2 w-full">
          No Tokens Minted Or Bought Till Now In This Account Till Now
        </div>
      )}

      <div className="grid grid-cols-2 gap-5 p-5 w-full">
        {tokendetails.map((token, index) => (
          <Card
            key={index}
            className="flex flex-col gap-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <CardHeader className="font-faustina">{token.tokenName}</CardHeader>
            <CardContent className="flex flex-col gap-3">
              <CardDescription>
                Token Symbol: {token.tokenSymbol}
              </CardDescription>
              <CardDescription>
                ETH Value: {Number(token.ethamount)}
              </CardDescription>

              <CardDescription>Address: {token.holderAddress}</CardDescription>
              <CardDescription>
                Tokens Remaining: {Number(token.number)}
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
