import React from 'react';
import Header from '../../components/Header';
import { Banner } from './styles';

const HomePage = () => {
    return (
        <div className='text-3xl font-bold underline'>
            <Header />
            <Banner />
        </div>
    );
};

export default HomePage;
