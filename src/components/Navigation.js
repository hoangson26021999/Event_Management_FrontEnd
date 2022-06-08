import {
    Flex,
    Box,
    Spacer
} from '@chakra-ui/react'

import {
    Link
} from "react-router-dom";

import "./css/header.css"

const HomeNav = () => {
    return (
        <>
            <Flex>
                <Box p='4' >
                    <Link to="" fontSize='2xl' className="logo"> Events Management </Link>
                </Box>
                <Spacer />
                <Box p='4' >
                    <Link to="login" fontSize='2xl' > Đăng nhập </Link>
                </Box>
                <Box p='4' >
                    <Link to="sign_up" fontSize='2xl' > Đăng ký</Link>
                </Box>
            </Flex>
        </>
    )
}

export default HomeNav;



