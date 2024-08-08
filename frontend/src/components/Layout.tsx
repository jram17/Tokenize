import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => (
    <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
            <Outlet />
        </div>
    </div>
);

export default Layout;
