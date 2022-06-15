import {
    Box,
    Heading,
    Text,
    ListItem,
    UnorderedList,
} from '@chakra-ui/react'
    function Sumary(props) {
        return (
            <>
                <Box p={5} shadow='md' borderWidth='3px' >
                    <Heading fontSize='xl'>{props.title}</Heading>
                    <UnorderedList >
                        <ListItem>Sự kiện {props.event.event_name} </ListItem>
                        <ListItem>Diễn giả : {props.speaker.speaker_name} </ListItem>
                        <ListItem>Nghề nghiệp : {props.speaker.speaker_career} </ListItem>
                        <ListItem>Thời gian bắt đầu :{props.event.event_starting_time}</ListItem>
                        <ListItem>Thời gian kết thúc dự kiến : {props.event.event_ending_time}</ListItem>
                        <ListItem>Địa điểm : {props.event.event_location}</ListItem>
                        <ListItem> Ngày tổ chức : {props.event.event_date} </ListItem>
                    </UnorderedList>
                </Box>
            </>
        )
    }

    export default Sumary ;