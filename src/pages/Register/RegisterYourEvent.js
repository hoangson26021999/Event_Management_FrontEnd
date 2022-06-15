import React, { useEffect, useState } from 'react';
import EventImage from '../../images/event.jpg'
import StackEvent from '../../components/StackEvent';
import {
    Routes,
    Route
} from "react-router-dom";
import RegisterEventDetail from "./RegisterEventDetail"


function RegisterYourEvent() {

    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/register_api/getEvsbyReId", {
            mode: "cors",
            method: 'GET',
            headers: {
                'Authorization': 'EvMa ' + localStorage.getItem("accessToken"),
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
    },[] )

    useEffect(()=>{},[events])

    return (
        <>
            <Routes>
                <Route path="" element={ <StackEvent events={events} srcImage={EventImage} />} />
                <Route path="event/:id" element={<RegisterEventDetail />} />
            </Routes>
        </>
    )
}
export default RegisterYourEvent 