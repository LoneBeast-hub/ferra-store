import Directory from '../../components/directory/directory.component';
import { HomePageContainer } from './homepage.styles';
import { Routes, Route } from 'react-router-dom';
import { DevicePageMod } from '../device-page/device-page.mod.component';

const HomePage = () => {
    return(
        // use directory component
        <HomePageContainer>
            <Routes>
                {/* This naturally shows the directory */}
                <Route path='' element={<Directory/>} />
                {/* This shows the device page */}
                <Route path=':deviceId' element={< DevicePageMod />} />
            </Routes>
        </HomePageContainer>
    );
}

export default HomePage