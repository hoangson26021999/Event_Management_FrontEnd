import {
    Flex,
    Box,
    Spacer,
    Text
} from '@chakra-ui/react'

import { Button } from '@chakra-ui/react'

function HomeNav() {
    return (
        <>
            <Flex>
                <Box p='4' >
                    <Text fontSize='2xl'> Events Management </Text>
                </Box>
                <Spacer />
                <Box p='4' >
                    <Button colorScheme='teal' size='md'>
                        Đăng nhập
                    </Button>
                </Box>
                <Box p='4' >
                    <Button colorScheme='teal' size='md'>
                        Đăng ký
                    </Button>
                </Box>
            </Flex>
        </>
    )
}


export default HomeNav;



