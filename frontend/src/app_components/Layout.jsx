import React from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
const Layout = () => (
  <div className="flex flex-col min-h-screen">
    <div className="flex-grow">
      <Outlet />
      <Toaster />
    </div>
  </div>
);

export default Layout;
