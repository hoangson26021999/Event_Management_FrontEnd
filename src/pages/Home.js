import React from 'react';
import HomeNav from '../components/Navigation';
import StackEvent from '../components/StackEvent';
import Login from "../pages/Login";
import CreateForm from "../pages/CreateForm";
import EventDetail  from './EventDetail';
import "../components//css/header.css"

import {
    Routes,
    Route
} from "react-router-dom";
import HomeContent from './HomeContent';

function Home() {

    return (
        <>
            <header className='header' >
                <HomeNav />
            </header>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/sign_up" element={<CreateForm />} />
                <Route path="/event/:id" element={<EventDetail />} />
                <Route path="/" element={<HomeContent />} />
            </Routes>
            <footer>
                
            </footer>
            
        </>
    );
}

export default Home;
