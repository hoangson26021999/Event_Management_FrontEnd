import React from 'react';
import RegisterNav from '../../components/Register/RegisterNav';
import EventDetail from '../../pages/EventDetail';
import "../../components//css/header.css"

import {
    Routes,
    Route
} from "react-router-dom";
import RegisterYourEvent from './RegisterYourEvent';
import RegisterHomeContent from './RegisterHomeContent';

function Home() {
    
    return (
        <>
            <header className='header' >
                <RegisterNav />
            </header>

            <Routes>
                <Route path="" element={<RegisterHomeContent />} />
                <Route path="event/:id" element={<EventDetail />} />
                <Route path="your_events/*" element={<RegisterYourEvent />} />
            </Routes>
        </>
    );
}

export default Home;
