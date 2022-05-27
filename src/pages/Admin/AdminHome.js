import React from 'react';

import AdminNav from '../../components/Admin/AdminNav';
import StackEvent from '../../components/TableEvent';
import ButtonCreateEvent from '../../components/Admin/ButtonCreateEvent ';

function AdminHome() {

    return (
        <>
            <AdminNav />
            <StackEvent/> 
            <ButtonCreateEvent />
        </>
    );
}

export default AdminHome;

