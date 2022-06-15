import {
    Box,
    Flex,
    Button
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

function AdminHomeFooter() {

    let navigate = useNavigate();

    return (
        <>
            <Flex >
                <Box p='4' >
                    <Button colorScheme='teal' size='md' onClick={() => navigate(-1)}>
                        Trang chủ
                    </Button>
                </Box>
            </Flex>
        </>
    )

}
export default AdminHomeFooter;





