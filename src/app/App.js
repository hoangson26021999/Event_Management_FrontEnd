import React from 'react';
import {
  ChakraProvider
} from '@chakra-ui/react';

import Home from "../pages/Home" ; 
//import AdminHome from '../pages/Admin/AdminHome';

function App() {
  return (
    <ChakraProvider>
      <Home/>
    </ChakraProvider>
  );
}

export default App;
