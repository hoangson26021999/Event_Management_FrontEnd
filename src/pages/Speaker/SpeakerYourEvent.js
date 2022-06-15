import React, { useEffect, useState } from 'react';
import SpeakerYourEventDetail from './SpeakerYourEventDetail';
import StackEvent from '../../components/StackEvent';
import {Route , Routes } from "react-router-dom";
import EventImage from '../../images/event.jpg'

function SpeakerYourEvents() {

    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/speaker_api/getEvsbySpId", {
            mode: "cors",
            method: 'GET',
            headers: {
                'Authorization': 'EvMa ' + localStorage.getItem("accessToken")
            },
        }).then(response => {

            if (response.ok) {
                return response.json()
            } else {
                throw new Error(response.status)
            }
        }).then(result => {
            setEvents(result)
        }).catch(error => console.log('error', error));
    }, [])

    useEffect(() => {
        
    }, [events])


    return (
        <>
            <Routes>
                <Route path="" element={<StackEvent events={events} srcImage={EventImage}/>} />
                <Route path="event/:id" element={<SpeakerYourEventDetail />} />
            </Routes>
        </>
    )
}

export default SpeakerYourEvents;
