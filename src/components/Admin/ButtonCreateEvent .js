import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

 function ButtonCreateEvent() {

    const navigate = useNavigate()

    function handleOnClick() {
        navigate("create_event")
    }

    return (
        <>
            <Button colorScheme='teal' size='md' onClick={()=> handleOnClick()}>
                Create Event
            </Button>
        </>
    )
}

export default ButtonCreateEvent;