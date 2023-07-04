import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../common/header/Header';
import Home from '../home/hero/Home';

const Pages = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </>
    );
};

export default Pages;