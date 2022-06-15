import {
    Stack,
    Text,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Button

} from '@chakra-ui/react'
import { EditIcon, EmailIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useToast } from '@chakra-ui/react'
import React from 'react'

function CreateForm() {

    const navigate = useNavigate()
    const toast = useToast() 

    const [show, setShow] = React.useState(false)
    const handleShowClick = () => setShow(!show)

    const [showcf, setShowcf] = React.useState(false)
    const handleShowcfClick = () => setShowcf(!showcf)

    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cfpassword, setCfPassword] = useState('')


    function confirm() {

        console.log({
            register_name: name,
            register_age: age,
            register_email: email,
            register_account_name: username,
            register_account_password: password,
            confirm_password: cfpassword
        })

        fetch("http://localhost:8080/op_api/create_register", {
            mode: "cors",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                register_name: name,
                register_age: age,
                register_email: email,
                register_account_name: username,
                register_account_password: password,
                confirm_password: cfpassword
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
                title: 'Người dùng đã được tạo',
                description: "Người dùng "+ result.register_name + "đã được tạo.",
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
                <Text fontSize='3xl' > Create User </Text>
                <InputGroup width={500} >
                    <InputLeftElement
                        pointerEvents='none'
                        children={<EditIcon color='gray.300' />}
                    />
                    <Input type='tel' placeholder='Họ tên' onChange={(e) => { setName(e.target.value) }} />
                </InputGroup>

                <InputGroup width={500} >
                    <InputLeftElement
                        pointerEvents='none'
                        children={<EditIcon color='gray.300' />}
                    />
                    <Input type='number' placeholder='Tuổi' onChange={(e) => { setAge(e.target.value) }} />
                </InputGroup>
                <InputGroup width={500} >
                    <InputLeftElement
                        pointerEvents='none'
                        children={<EmailIcon color='gray.300' />}
                    />
                    <Input type='tel' placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} />
                </InputGroup>

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

                <InputGroup size='md' width={500} >
                    <Input
                        pr='4.5rem'
                        type={showcf ? 'text' : 'password'}
                        placeholder='Enter confirm password'
                        onChange={(e) => { setCfPassword(e.target.value) }}
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleShowcfClick}>
                            {showcf ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>

                <Button colorScheme='teal' size='md' width={500} onClick={() => {
                    console.log({
                        register_name: name,
                        register_age: age,
                        register_email: email,
                        register_account_name: username,
                        register_account_password: password,
                        confirm_password: cfpassword
                    })
                    
                    confirm() }} >
                    Confirm
                </Button>
            </Stack>
        </>
    )
}
export default CreateForm;