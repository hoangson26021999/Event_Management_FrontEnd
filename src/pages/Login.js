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
import { useState } from 'react';

import React from 'react';

function Login() {

    const [show, setShow] = React.useState(false)
    const handleShowClick = () => setShow(!show)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        const account = { username, password }
        console.log(account)
        fetch("https://localhost:8080/j_spring_security_check", {

            method: "POST",
            header: { "Content-Type": "application/json" },
            body: JSON.stringify(account)

        }).then(() => {
            console.log("Đã gửi tài khoản để đăng nhập")
        })

    }

    return (
        <>
            <Text fontSize='xl' align-items="center"  > Login </Text>
            <Stack spacing={4} >
                <InputGroup width={500} >
                    <InputLeftElement
                        pointerEvents='none'
                        children={<EditIcon color='gray.300' />}
                    />
                    <Input type='tel' placeholder='Account' onChange={(e) => { setUsername(e.target.value) }} />
                </InputGroup>


                <InputGroup size='md' width={500} >
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

                <Button colorScheme='teal' size='md' width={500} onClick={handleClick}>
                    Đăng nhập
                </Button>
            </Stack>
        </>
    );
}

export default Login;

