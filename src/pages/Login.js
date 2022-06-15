import {
    Stack,
    Text,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Button

} from '@chakra-ui/react'

import { EditIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {

    const [show, setShow] = React.useState(false)
    const handleShowClick = () => setShow(!show)

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        const account = { username, password }
        fetch("http://localhost:8080/authenticate", {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(account)
        }).then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw Error(response.status)
            }
        }).then(result => {
            console.log(result)
            localStorage.setItem("accessToken", result.jwt)

            fetch("http://localhost:8080/op_api/getUserRole", {
                mode: "cors",
                method: 'GET',
                headers: {
                    'Authorization': 'EvMa ' + localStorage.getItem("accessToken"),
                }
            }).then(response => {
                console.log(response)
                if (response.ok) {
                    return response.text()
                } else {
                    throw new Error(response.status)
                }
            }).then(result => {
                navigate('/'+result+'/' )
            }).catch(error => console.log('error', error));
        }).catch(error => {
            console.log("error", error)
            alert("Username or PassWord are wrong")
        })
    }

    return (
        <>
            <Stack
                spacing={4}
                width="80%"
                margin="0 auto"
                align='stretch'
            >
                <Text fontSize='3xl' align-items="center" > Login </Text>
                <InputGroup width='100%' max-width='500px'>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<EditIcon color='gray.300' />}
                    />
                    <Input type='tel' placeholder='Account' onChange={(e) => { setUsername(e.target.value) }} />
                </InputGroup>
                <InputGroup size='md' width='100%' max-width='500px' >
                    <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleShowClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>

                <Button colorScheme='teal' size='md' width='100%' max-width='250px' onClick={handleClick}>
                    Đăng nhập
                </Button>
            </Stack>
        </>
    );
}

export default Login;

