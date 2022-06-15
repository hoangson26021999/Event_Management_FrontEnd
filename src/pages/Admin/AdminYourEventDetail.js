import {
    Button,
    Spacer,
    StackDivider,
    VStack,
    Box,
    Flex
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import "../../components/css/footer.css"
import Sumary from '../../components/Sumary'
import Feature from '../../components/Feature'
import SpeakerDetail from '../../components/SpeakerDetail'
import { QrReader } from 'react-qr-reader'

function AdminEventDetail() {

    const { id } = useParams();
    const [event, setEvent] = useState('')
    const [speaker, setSpeaker] = useState('')
    const [data, setData] = useState('No result')
    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:8080/op_api/event/' + id)
            .then(res => res.json())
            .then((result) => {
                setEvent(result);
                setSpeaker(result.event_speaker);
            })
    }, [])

    function handleRegisterClick() {
        if (data != "No result") {
            fetch('http://localhost:8080/admin_api/check_in?' + new URLSearchParams({
                id: id,
                code: data
            }), {
                mode: "cors",
                method: 'POST',
                headers: {
                    'Authorization': 'EvMa ' + localStorage.getItem("accessToken")
                }
            })
                .then(res => res.text())
                .then((result) => {
                    result == "Success" ? alert("Người dùng được tham gia!") : alert("Người dùng không được tham gia !")
                })
        }
    }

    function handleEditClick() {
        navigate('/admin/edit_event/' + id)
    }

    function handleCancelClick() {
        

        fetch('http://localhost:8080/admin_api/delete_event?' + new URLSearchParams({
            event_id: event.event_id
        }), {
            mode: "cors",
            method: 'DELETE',
            headers: {
                'Authorization': 'EvMa ' + localStorage.getItem("accessToken")
            }
        })
            .then(res => res.text())
            .then((result) => {
                result == "Cancel Valid" ? alert("Bạn đã hủy sự kiện này!") : alert("Xảy ra lỗi ")
                navigate(-1)
            })
    }

    return (
        <>
            <VStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing="4"
                align='stretch'
                w='80%'
                margin="0 auto" >

                <Feature
                    title={event.event_name}
                />
                <Feature
                    dis='none'
                    title='Nội dung'
                />
                <SpeakerDetail
                    title="Diễn giả"
                    speaker={speaker}
                />
                <Sumary title="Sơ lược" speaker={speaker} event={event} />

                <QrReader
                    onResult={(result, error) => {
                        if (!!result) {
                            setData(result?.text);
                        }
                        if (!!error) {
                            console.info(error);
                        }
                    }}
                    style={{ width: '100%' }}
                />
                <p>{data}</p>

                <Flex >
                    <Box p='4' >
                        <Button colorScheme='teal' size='md' onClick={() => navigate(-1)}>
                            Quay lại
                        </Button>
                    </Box>
                    <Spacer />
                    <Box p='4' >
                        <Button colorScheme='cyan' size='md' onClick={() => handleRegisterClick()}>
                            Xác nhận người tham gia
                        </Button>
                    </Box> 
                    <Box p='4' >
                        <Button colorScheme='yellow' size='md' onClick={() => handleEditClick()}>
                            Chỉnh sửa
                        </Button>
                    </Box>
                    <Box p='4' >
                        <Button colorScheme='red' size='md' onClick={() => handleCancelClick()}>
                            Hủy sự kiện
                        </Button>
                    </Box>
                </Flex>
            </VStack>

        </>
    )
}

export default AdminEventDetail;