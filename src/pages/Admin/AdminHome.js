import React from 'react';
import AdminNav from '../../components/Admin/AdminNav';
import { Route, Routes } from 'react-router-dom';
import AdminEventDetail from './AdminEventDetail';
import AdminYourEvent from './AdminYourEvents';
import AdminHomeContent from './AdminHomeContent';
import CreateEventForm from '../Admin/CreateEventForm'
import "../../components/css/footer.css"
import EditEventForm from './EditEventForm'

function AdminHome() {

    return (
        <>
            <header>
                <AdminNav />
            </header>

            <Routes>
                <Route path="" element={<AdminHomeContent />} />
                <Route path="edit_event/:id" element={<EditEventForm />} /> 
                <Route path="create_event" element={<CreateEventForm />} />
                <Route path="your_events/*" element={<AdminYourEvent />} />
                <Route path="event/:id" element={<AdminEventDetail />} />
            </Routes>
        </>
    );
}

export default AdminHome;

