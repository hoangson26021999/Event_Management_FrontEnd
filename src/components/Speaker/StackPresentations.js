import React, { useEffect, useState } from 'react';
import { Box, VStack, StackDivider, Heading, Image } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

function StackPresentations(props) {

    let navigate = useNavigate();

    function handleClick(evt) {
        navigate('pres/' + evt);
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
                {props.pres.map(pre => (
                    <>
                        <Heading fontSize='xl'> {pre.presentation_name}</Heading>
                        <Box borderWidth='3px' borderRadius='lg' overflow='hidden' key={pre.presentation_id} onClick={() => {handleClick(pre.presentation_id)}}>
                            <Image
                                max-height='100%'
                                max-width='100%'
                                objectFit='cover'
                                src={props.srcImage}
                                alt='Pre'
                            />
                        </Box>
                    </>
                ))}
            </VStack>
        </>
    )
}

export default StackPresentations;



