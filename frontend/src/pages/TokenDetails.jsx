import React, { useEffect, useState } from 'react';
import MyToken from '@/app_components/MyToken';
import { ethers } from 'ethers';
import details from '../contracts';

function TokenDetails() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [personalTokenDetails, setPersonalTokenDetails] = useState([]);
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

          setPersonalTokenDetails(tx);
          setLoading(false);
        } else {
          console.error('No Ethereum provider found');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching token details:', error);
        if (error.code === ethers.errors.CALL_EXCEPTION) {
          console.error(
            'Call exception. Possible reasons: incorrect method name, contract not deployed, or insufficient gas.'
          );
        }
        setLoading(false);
      }
    };

    initializeEthers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f0f0f0]">
        <p className="text-4xl font-faustina">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-left justify-center bg-cover bg-repeat-y bg-[#f0f0f0]">
      <MyToken tokendetails={personalTokenDetails} />
    </div>
  );
}

export default TokenDetails;
