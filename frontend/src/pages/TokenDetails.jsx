import React, { useEffect, useState } from 'react';
import MyToken from '@/app_components/MyToken';
import { ethers } from 'ethers';
import details from '../contracts';

const personaltokendetails = {
  tokenname: 'Inthrakumar',
  tokensymbol: 'IK',
  ethvalue: '0.01',
  transactionhash: '0xSsjdfvbskdjvbsdvjsdvc',
  Address: '0xekfjhsdkfjsdfjksd',
  tokensremaning: '10',
};

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
];

function TokenDetails() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

  useEffect(() => {
    const initializeEthers = async () => {
      try {
        if (window.ethereum) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          setProvider(provider);
          const signer = provider.getSigner();
          setSigner(signer);
          const contract = new ethers.Contract(
            details.address,
            details.abi,
            signer
          );
          const tx = await contract.getTokenHolderDetailsWithAddress();
          console.log(tx);
        } else {
          console.error('No Ethereum provider found');
        }
      } catch (error) {
        console.log(error);
      }
    };

    initializeEthers();
  }, []);

  const allTokenDetails = [personaltokendetails, ...othertokendetails];

  return (
    <div className="min-h-screen flex items-left justify-center bg-cover bg-repeat-y">
      <MyToken tokendetails={allTokenDetails} />
    </div>
  );
}

export default TokenDetails;
