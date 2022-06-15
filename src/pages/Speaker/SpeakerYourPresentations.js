import React, { useEffect, useState } from 'react'
import PreImage from '../../images/presentation.jpg'
import SpeakerPresentaionDetail from './SpeakerPresentaionDetail'
import {Route , Routes } from "react-router-dom"
import StackPresentations from '../../components/Speaker/StackPresentations'


function SpeakerYourPresentations() {

    const [pres, setPres] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/speaker_api/getPresbySpId", {
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
            setPres(result)
        }).catch(error => console.log('error', error));
    }, [])

    useEffect(() => {

    }, [pres])

    return (
        <>
            <Routes>
                <Route path="" element={<StackPresentations pres={pres} srcImage={PreImage} />}/>
                <Route path="pres/:id" element={<SpeakerPresentaionDetail/>} />
            </Routes>
        </>
    )
}

export default SpeakerYourPresentations;
