import {
    Stack,
    Text,
    Input,
    InputGroup,
    InputLeftElement,
    Button,
    Select
} from '@chakra-ui/react'
import { useParams } from "react-router-dom"

import { EditIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import React from 'react';
import { useToast } from '@chakra-ui/react'

function EditEventForm() {

    const toast = useToast()
    const navigate = useNavigate()
    const { id } = useParams()

    const [event, setEvent] = useState({})
    const [speakers, setSpeakers] = useState([{}])

    const [name, setName] = useState('')
    const [speaker, setSpeaker] = useState(0)
    const [date, setDate] = useState('')
    const [starttime, setStartTime] = useState('')
    const [endtime, setEndTime] = useState('')
    const [location, setLocation] = useState('')

    useEffect(() => {

        fetch('http://localhost:8080/op_api/event/' + id)
            .then(res => res.json())
            .then((result) => {
                setEvent(result);
                setSpeaker(result.event_speaker.id);
            })

        fetch("http://localhost:8080/admin_api/getAllSps", {
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

            console.log(result)
            setSpeakers(result)

        }).catch(error => console.log('error', error));


    }, [])

    function submit() {

        console.log({
            event_name: name,
            speaker_id: speaker,
            event_date: date,
            event_starting_time: starttime,
            event_ending_time: endtime,
            event_location: location
        })

        fetch("http://localhost:8080/admin_api/edit_event/" + id, {
            mode: "cors",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'EvMa ' + localStorage.getItem("accessToken"),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                event_name: name,
                speaker_id: speaker,
                event_date: date,
                event_starting_time: starttime,
                event_ending_time: endtime,
                event_location: location
            })
        }).then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error(response.status)
            }
        }).then(result => {
            console.log(result)
            toast({
                title: 'Sự kiện đã được tạo',
                description: "Sự kiện " + result.event_name + "đã được tạo.",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
            navigate(-1)

        }).catch(error => console.log('error', error));
    }

    return (
        <>
            <Stack
                spacing={4}
                width="40%"
                margin="0 auto"
            >
                <Text fontSize='3xl' > Chỉnh sửa sự kiện {event.event_name} </Text>
                <InputGroup width={500} >
                    <InputLeftElement
                        pointerEvents='none'
                        children={<EditIcon color='gray.300' />}
                    />
                    <Input type='tel' placeholder='Tên sự kiện' value={event.event_name} onChange={(e) => { setName(e.target.value) }} />
                </InputGroup>

                <Select onChange={(e) => { setSpeaker(e.target.value) }}>
                    {speakers.map(speaker => (
                        <option value={speaker.id}> {speaker.speaker_name}</option>
                    ))}
                </Select>
                <InputGroup width={500} >
                    <Input type='datetime-local' value={event.event_date} placeholder='Ngày tổ chức ' onChange={(e) => { setDate(e.target.value) }} />
                </InputGroup>
                <InputGroup width={500} >
                    <Input type='time' value={event.event_starting_time} placeholder='Thời gian bắt đầu' onChange={(e) => { setStartTime(e.target.value + ':00') }} />
                </InputGroup>

                <InputGroup width={500} >
                    <Input type='time' value={event.event_ending_time} placeholder='Thời gian kết thúc dự kiến' onChange={(e) => { setEndTime(e.target.value + ':00') }} />
                </InputGroup>

                <InputGroup width={500} >
                    <InputLeftElement
                        pointerEvents='none'
                        children={<EditIcon color='gray.300' />}
                    />
                    <Input type='tel' value={event.event_location} placeholder=' Địa điểm' onChange={(e) => { setLocation(e.target.value) }} />
                </InputGroup>
                <Button colorScheme='teal' size='md' width={500} onClick={() => submit()}>
                    Xác nhận
                </Button>
            </Stack>
        </>
    )
}
export default EditEventForm;