import React from 'react';
import Houses from './Houses/Houses';
import Banner from '../../components/Banner';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Houses />
        </div>
    );
};

export default Home;