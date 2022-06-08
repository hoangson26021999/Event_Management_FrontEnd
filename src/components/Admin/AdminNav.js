import {
    Flex,
    Box,
    Spacer
} from '@chakra-ui/react'
import { Link, useNavigate } from "react-router-dom";
import { Button } from '@chakra-ui/react'
import BtnLogout from '../BtnLogout';

function AdminNav() {

    let navigate = useNavigate();

    function logout() {
        localStorage.removeItem("accessToken") ;
        navigate('/');
    }
    return (
        <>
            <Flex>
                <Box p='4' >
                    <Link to="" fontSize='2xl' className="logo"> Events Management </Link>
                </Box>
                <Box p='4' >
                    <Link to="your_events" fontSize='2xl' > Your Events </Link>
                </Box>
                <Spacer />
                <Box p='4' >
                    <BtnLogout/>
                </Box>
            </Flex>
        </>
    )
}
export default AdminNav;


