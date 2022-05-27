import {
    Flex,
    Box,
    Spacer
} from '@chakra-ui/react'

import { Button } from '@chakra-ui/react'

function AdminNav() {
    return (
        <>
            <Flex>
                <Box p='4' >
                    Events Management
                </Box>
                <Box p='4' >
                    Your Events
                </Box>
                <Spacer />
                <Box p='4' >
                    <Button colorScheme='teal' size='md'>
                        Đăng xuất
                    </Button>
                </Box>
            </Flex>
        </>
    )
}
export default AdminNav;


