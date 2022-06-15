import StackEvent from '../../components/StackEvent';
import ButtonCreateEvent from '../../components/Admin/ButtonCreateEvent ';
import React, { useEffect, useState } from 'react';
import EventImage from '../../images/event.jpg'

function AdminHomeContent() {

    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/op_api/getEvents")
            .then(res => res.json())
            .then((result) => {
                setEvents(result);
            })
    }, [])

    useEffect(() => {
    }, [events])
    return(
        <>
            <StackEvent events={events} srcImage={EventImage}/>
            <footer >
                <ButtonCreateEvent />
            </footer> 
        </>
    ) 
}
export default AdminHomeContent;