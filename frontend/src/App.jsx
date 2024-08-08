import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
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
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const _initialize = async (selectedAddress) => {
    setAccount(selectedAddress);
    // Add your initialization logic here
  };

  const _stopPollingData = () => {
    // Add your logic to stop polling data here
  };

  const _resetState = () => {
    setAccount(null);
    // Add your logic to reset the state here
  };
  const _checkNetwork = async () => {
    // Add your network checking logic here
  };
  const _connectWallet = async () => {
    console.log('hit');
    if (window.ethereum) {
      const [selectedAddress] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      console.log(selectedAddress);
      await _checkNetwork();
      await _initialize(selectedAddress);
      const provider = await new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);
      const signer = provider.getSigner();
      setSigner(signer);
      window.ethereum.on('accountsChanged', ([newAddress]) => {
        _stopPollingData();
        if (newAddress === undefined) {
          return _resetState();
        }
        _initialize(newAddress);
      });
    }
  };

  useEffect(() => {
    _connectWallet();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
