import {
    Box,
    Heading,
    Image,
} from '@chakra-ui/react'
import EventDetailImage from '../images/eventdetail.jpg'

function Feature(props) {
    return (
        <Box p={5} shadow='md' borderWidth='1px' >
            <Heading fontSize='xl'>{props.title}</Heading>
            <Image 
                display={props.dis}
                height='100%'
                width='100%'
                objectFit='cover'
                src={EventDetailImage}
                alt='Event'
            />
        </Box>
    )
}
export default Feature ;