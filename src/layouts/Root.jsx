import React from 'react';
import NavBar from '../components/shared/NavBer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    );
};

export default Root;