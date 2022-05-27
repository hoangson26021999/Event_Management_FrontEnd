import React, { useEffect, useState } from 'react';
import { Box, VStack, StackDivider, Text } from '@chakra-ui/react'

function StackEvent() {

    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/getEvents")
            .then(res => res.json())
            .then((result) => {
                setEvents(result);
            })
    }, [])

    return (
        <>
            <VStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing={4}
                align='stretch'
                width="80%"
                margin="0 auto"
            >

                {events.map(event => (
                    <Box borderWidth='1px' borderRadius='lg' overflow='hidden' key={event.event_id} h='80px' >
                        <Text> {event.event_name} </Text>
                    </Box>
                ))}

            </VStack>
        </>
    )
}

export default StackEvent;



