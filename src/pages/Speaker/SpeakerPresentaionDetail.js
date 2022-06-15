import {
    Button,
    StackDivider,
    VStack,
    Heading,
    Box,

} from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import "../../components/css/footer.css"

function SpeakerPresentaionDetail() {

    const { id } = useParams();
    const [pre, setPre] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:8080/speaker_api/pres/' + id, {
            mode: "cors",
            method: 'GET',
            headers: {
                'Authorization': 'EvMa ' + localStorage.getItem("accessToken"),
            },
        }) 
            .then(res => res.json())
            .then((result) => {
                setPre(result);
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
            <Heading fontSize='xl'> {pre.presentation_name}</Heading>
            <Box borderWidth='3px' borderRadius='lg' overflow='hidden' key={pre.presentation_id} >
                <div dangerouslySetInnerHTML={{__html: pre.presentation_content}}></div>
            </Box>
            <Button onClick={() => navigate(-1)}>Quay lại</Button>
        </VStack>

        </>
    )
}
export default SpeakerPresentaionDetail;