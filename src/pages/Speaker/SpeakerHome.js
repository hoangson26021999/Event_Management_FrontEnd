import SpeakerHomeNav from '../../components/Speaker/SpeakerHomeNav';
import { Route, Routes } from 'react-router-dom';
import SpeakerYourEvent from './SpeakerYourEvent'
import SpeakerYourPresentations from './SpeakerYourPresentations'
import SpeakerEventDetail from './SpeakerEventDetail'
import SpeakerHomeContent from './SpeakerHomeContent';


function Speaker_Home() {

    return (
        <>
            <header>
                <SpeakerHomeNav />
            </header>
            <Routes>
                <Route path="" element={<SpeakerHomeContent />} />
                <Route path="your_events/*" element={<SpeakerYourEvent/>}/>
                <Route path="your_presentations/*" element={<SpeakerYourPresentations/>} />
                <Route path="event/:id" element={<SpeakerEventDetail />} />
            </Routes>

        </>
    );
}

export default Speaker_Home;
