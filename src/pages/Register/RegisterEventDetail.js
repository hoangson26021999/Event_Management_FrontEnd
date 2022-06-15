import {
    Button,
    StackDivider,
    VStack
} from '@chakra-ui/react'
import {
    Box,
    Heading,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import "../../components/css/footer.css"
import Sumary from '../../components/Sumary'
import { QRCodeSVG } from 'qrcode.react'


function RegisterEventDetail() {

    const navigate = useNavigate()
    const { id } = useParams();

    const [event, setEvent] = useState('');
    const [speaker, setSpeaker] = useState('');
    const [src, setSrc] = useState('');

    useEffect(() => {

        fetch('http://localhost:8080/op_api/event/' + id)
            .then(res => res.json())
            .then((result) => {
                setEvent(result);
                setSpeaker(result.event_speaker);
            })

        fetch('http://localhost:8080/register_api/generated?' + new URLSearchParams({
            id: id
        }), {
            mode: "cors",
            method: 'GET',
            headers: {
                'Authorization': 'EvMa ' + localStorage.getItem("accessToken")
            }
        })
            .then(res => res.text())
            .then((result) => {
                console.log(result)
                setSrc(result)
            })
    }, [])

    function cancel() {
        fetch('http://localhost:8080/register_api/cancel_event?' + new URLSearchParams({
            event_id: event.event_id
        }), {
            mode: "cors",
            method: 'GET',
            headers: {
                'Authorization': 'EvMa ' + localStorage.getItem("accessToken")
            }
        })
            .then(res => res.text())
            .then((result) => {
                console.log(result)
                result == "Cancel Valid" ? alert("Bạn đã hủy tham gia sự kiện này!") : alert("Xảy ra lỗi")
                navigate(-1)
            })
    }


    return (
        <>
            <VStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing="3"
                align='stretch'
                w='80%'
                margin="0 auto" >
                <Sumary title="Sơ lược" speaker={speaker} event={event} />

                <Box p={5} shadow='md' borderWidth='1px' margin="0 auto" >
                    <Heading fontSize='xl'>Mã Qr Code </Heading>
                    <QRCodeSVG
                        height='500px'
                        width='500px'
                        objectFit='cover'
                        value={src}
                        alt='Event' />
                </Box>
                <Button colorScheme='red' onClick={() => { cancel() }}> Hủy tham gia</Button>
            </VStack>
        </>
    )
}

export default RegisterEventDetail;