import React, { useEffect, useState } from 'react';
import MyToken from '@/app_components/MyToken';
import { ethers } from 'ethers';
import details from '../contracts';

function TokenDetails() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [personaltokendetails, setPersonalTokenDetails] = useState(null);
  const [loading, setLoading] = useState(true);

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
          setPersonalTokenDetails({
            tokenname: tx.tokenName,
            tokensymbol: tx.tokenSymbol,
            Address: tx.holderAddress,
            tokensremaining: Number(tx.number).toString(),
            ethvalue: Number(tx.amount).toString(),
          });

          setLoading(false);
        } else {
          console.error('No Ethereum provider found');
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    initializeEthers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center  bg-[#f0f0f0]">
        <p className="text-4xl font-faustina">Loading...</p>
      </div>
    );
  }

  const allTokenDetails = [personaltokendetails];

  return (
    <div className="min-h-screen flex items-left justify-center bg-cover bg-repeat-y  bg-[#f0f0f0]">
      <MyToken tokendetails={allTokenDetails} />
    </div>
  );
}

export default TokenDetails;
