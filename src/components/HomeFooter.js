import {
    Box,
    Button,
    Flex,
    Spacer
} from '@chakra-ui/react';

import { useNavigate } from "react-router-dom"
import { useToast } from '@chakra-ui/react'

function HomeFooter(props) {

    let navigate = useNavigate()
    const toast = useToast()

    function handleRegisterClick() {
        if (localStorage.getItem("accessToken") != null) {

            fetch("http://localhost:8080/register_api/regis_event?" + new URLSearchParams({
                event_id: props.event.event_id
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
                    if (result == "Valid") {
                        toast({
                            title: 'Tham gia sự kiện thành công',
                            description: "Bạn đã đăng kí sự kiện " + props.event.event_name + " thành công!",
                            status: 'success',
                            duration: 9000,
                            isClosable: true,
                        })
                    } else if (result == "Invalid") {
                        toast({
                            title: 'Tham gia sự kiện không thành công',
                            description: "Bạn đã đăng kí tham gia sự kiện " + props.event.event_name + " này!",
                            status: 'error',
                            duration: 9000,
                            isClosable: true,
                        })
                    }
                    navigate(-1)
                })
        } else {
            toast({
                title: 'Chưa đăng nhập',
                description: "Bạn phải đăng nhập để tham gia sự kiện " + props.event.event_name + " này!",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    }

    return (
        <>
            <Flex >
                <Box p='4' >
                    <Button colorScheme='teal' size='md' onClick={() => navigate(-1)}>
                        Quay lại
                    </Button>
                </Box>
                <Spacer />
                <Box p='4' >
                    <Button colorScheme='teal' size='md' onClick={() => handleRegisterClick()}>
                        Đăng ký tham gia
                    </Button>
                </Box>
            </Flex>
        </>
    )
}
export default HomeFooter;