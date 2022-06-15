import {
    Flex,
    Box,
    Spacer
} from '@chakra-ui/react'

import {
    Link
} from "react-router-dom";
import BtnLogout from '../BtnLogout';

import "../css/header.css"

const HomeNav = () => {
    return (
        <>
            <Flex>
                <Box p='4' >
                    <Link to="" fontSize='2xl' className="logo"> Events Management </Link>
                </Box>
                <Box p='4' >
                    <Link to="your_events" fontSize='2xl' > Sự kiện đã đăng ký </Link>
                </Box>
                <Spacer />
                <Box p='4' >
                    <BtnLogout/>
                </Box>
            </Flex>
        </>
    )
}

export default HomeNav;



