import {
    StackDivider,
    Box,
    VStack,
    Heading,
    Text,
    ListItem,
    Image,
    UnorderedList,
} from '@chakra-ui/react'
function SpeakerDetail(props) {
    return (
        <>
            <Box p={5} shadow='md' borderWidth='3px' >
                <Heading fontSize='xl'>{props.title}</Heading>
                <UnorderedList >
                    <ListItem>Diễn giả : {props.speaker.speaker_name} </ListItem>
                    <ListItem>Tuổi : {props.speaker.speaker_age} </ListItem>
                    <ListItem>Nghề nghiệp : {props.speaker.speaker_career} </ListItem>
                    <ListItem>Email : {props.speaker.speaker_email} </ListItem>
                </UnorderedList>
            </Box>
        </>
    )
}
export default SpeakerDetail 