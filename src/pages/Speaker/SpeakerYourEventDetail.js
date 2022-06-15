import {
    StackDivider,
    VStack ,
    Button
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import "../../components/css/footer.css"
import Sumary from '../../components/Sumary'
import { useNavigate } from "react-router-dom";

function SpeakerEventDetail() {
    const { id } = useParams();
    const [event, setEvent] = useState('');
    const [speaker, setSpeaker] = useState('');


    useEffect(() => {
        fetch('http://localhost:8080/op_api/event/' + id)
            .then(res => res.json())
            .then((result) => {
                setEvent(result);
                setSpeaker(result.event_speaker);
            })
    }, [])

    const navigate = useNavigate()


    return (
        <>
            <VStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing="1"
                align='stretch'
                w='80%'
                margin="0 auto" >
                <Sumary title="Sơ lược" speaker={speaker} event={event} />
                <Button colorScheme='green' onClick={() => navigate(-1)}> Quay lại</Button>
            </VStack>
        </>
    )
}

export default SpeakerEventDetail;