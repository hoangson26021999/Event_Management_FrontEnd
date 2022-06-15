import {
    StackDivider,
    VStack
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import {  useParams } from "react-router-dom"
import "../../components/css/footer.css"
import AdminHomeFooter from '../../components/Admin/AdminHomeFooter'
import Feature  from '../../components/Feature'
import SpeakerDetail  from '../../components/SpeakerDetail'
import Sumary from '../../components/Sumary'

function AdminEventDetail() {

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

    console.log(event)

    return (
        <>
            <VStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing={4}
                align='stretch'
                w='80%'
                margin="0 auto"
            >
                <Feature
                    title={event.event_name}
                />
                <Feature
                    dis='none'
                    title='Nội dung'
                />
                <SpeakerDetail
                    title="Diễn giả"
                    speaker= {speaker}
                />
                <Sumary title="Sợ lược" speaker={speaker} event={event} />
                <AdminHomeFooter/>
            </VStack>
        </>
    )
}
export default AdminEventDetail;