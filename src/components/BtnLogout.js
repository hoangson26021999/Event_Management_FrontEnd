import { Button } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

function BtnLogout() {

    let navigate = useNavigate();
    function logout() {
        localStorage.removeItem("accessToken");
        navigate('/');
    }
    return (
        <>
            <Button colorScheme='teal' size='md' onClick={() => logout()}>
                Đăng xuất
            </Button>
        </>
    )
}

export default BtnLogout;
