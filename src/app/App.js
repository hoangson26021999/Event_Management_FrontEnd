import React from 'react';
import {
  ChakraProvider
} from '@chakra-ui/react';

import Home from "../pages/Home";
import AdminHome from '../pages/Admin/AdminHome';
import RegisterHome from '../pages/Register/RegisterHome';
import SpeakerHome from '../pages/Speaker/SpeakerHome';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <ChakraProvider>
      <Router>
         <Routes>
          <Route path="/admin/*" element={<AdminHome />} />
          <Route path="/register/*" element={<RegisterHome />} />
          <Route path="/speaker/*" element={<SpeakerHome />} />
          <Route path="/*" element={<Home/>} />
        </Routes> 
      </Router>
    </ChakraProvider>
  );
}

export default App;
