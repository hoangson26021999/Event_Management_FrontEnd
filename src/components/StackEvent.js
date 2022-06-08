import React, { useEffect, useState } from 'react';
import { Box, VStack, StackDivider, Heading, Image } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import EventImage from '../images/event.jpg'

function StackEvent(props) {

    let navigate = useNavigate();

    function handleClick(evt) {
        navigate('event/' + evt);
    }

    return (
        <>
            <VStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing={4}
                align='stretch'
                width="80%"
                margin="0 auto"
            >
                {props.events.map(event => (
                    <>
                        <Heading fontSize='xl'> {event.event_name}</Heading>
                        <Box borderWidth='3px' borderRadius='lg' overflow='hidden' key={event.event_id} onClick={() => { handleClick(event.event_id) }}>

                            <Image
                                max-height='100%'
                                max-width='100%'
                                objectFit='cover'
                                src={EventImage}
                                alt='Event'
                            />
                        </Box>
                    </>
                ))}
            </VStack>
        </>
    )
}

export default StackEvent;



