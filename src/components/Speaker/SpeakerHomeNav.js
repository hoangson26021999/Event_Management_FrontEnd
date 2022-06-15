import {
    Flex,
    Box,
    Spacer
} from '@chakra-ui/react'
import {
    Link
} from "react-router-dom";
import BtnLogout from '../BtnLogout';

const SpeakerHomeNav = () => {
    return (
        <>
            <Flex>
                <Box p='4' >
                    <Link to="" fontSize='2xl'> Events Management </Link>
                </Box>
                <Box p='4' >
                    <Link to="your_events" fontSize='2xl'> Sự kiện góp mặt</Link>
                </Box>
                <Box p='4' >
                    <Link to="your_presentations" fontSize='2xl'> Diễn văn </Link>
                </Box>
                <Spacer />
                <Box p='4' >
                    <BtnLogout/>
                </Box>
            </Flex>
        </>
    )
}

export default SpeakerHomeNav;



