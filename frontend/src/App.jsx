import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { AddressStore } from './store/store';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Layout from './app_components/Layout';
import Home from './pages/Home';
import CreateTokens from './pages/CreateTokens';
import TradeTokens from './pages/TradeTokens';
import TokenDetails from './pages/TokenDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/create" element={<CreateTokens />} />
      <Route path="/trade" element={<TradeTokens />} />
      <Route path="/details" element={<TokenDetails />} />
    </Route>
  )
);

function App() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const { setAddress, resetState } = AddressStore((state) => ({
    setAddress: state.setAddress,
    resetState: state.resetState,
  }));

  const _initialize = async (selectedAddress) => {
    // Add your initialization logic here
  };

  const _stopPollingData = () => {
    // Add your logic to stop polling data here
  };

  const _checkNetwork = async () => {
    // Add your network checking logic here
  };

  const _connectWallet = async () => {
    if (window.ethereum) {
      const [selectedAddress] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      await _checkNetwork();
      await _initialize(selectedAddress);

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      setProvider(provider);
      setSigner(signer);
      setAddress(selectedAddress);

      window.ethereum.on('accountsChanged', async ([newAddress]) => {
        _stopPollingData();
        if (!newAddress) {
          return resetState();
        }
        setAddress(newAddress);
        await _initialize(newAddress);
      });
    }
  };

  useEffect(() => {
    _connectWallet();
    return () => {
      // Cleanup event listeners on component unmount
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', _connectWallet);
      }
    };
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
