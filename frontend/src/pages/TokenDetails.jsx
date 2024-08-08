import React from 'react';
import MyToken from '@/app_components/MyToken';

function TokenDetails() {
  const personaltokendetails = {
    tokenname: 'Inthrakumar',
    tokensymbol: 'IK',
    ethvalue: '0.01',
    transactionhash: '0xSsjdfvbskdjvbsdvjsdvc',
    Address: '0xekfjhsdkfjsdfjksd',
    tokensremaning: '10',
  };

  // othertokendetails is an array of token details
  const othertokendetails = [
    {
      tokenname: 'SampleToken1',
      tokensymbol: 'STK1',
      ethvalue: '0.02',
      transactionhash: '0xAnotherHash1',
      Address: '0xSomeOtherAddress1',
      tokensremaning: '20',
    },
    {
      tokenname: 'SampleToken2',
      tokensymbol: 'STK2',
      ethvalue: '0.03',
      transactionhash: '0xAnotherHash2',
      Address: '0xSomeOtherAddress2',
      tokensremaning: '30',
    },
    // Add more token details as needed
  ];

  // Combine personaltokendetails with othertokendetails array
  const allTokenDetails = [personaltokendetails, ...othertokendetails];

  return (
    <div className="min-h-screen flex items-left justify-center bg-cover bg-repeat-y">
      <MyToken tokendetails={allTokenDetails} />
    </div>
  );
}

export default TokenDetails;
