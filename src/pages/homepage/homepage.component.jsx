import DirectoryContainer from '../../components/directory/directory.container';
import { HomePageContainer } from './homepage.styles';
import { Routes, Route } from 'react-router-dom';
import DevicePageContainer from '../device-page/device-page.container';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSectionsStart, fetchSectionItemsStart } from '../../redux/directory/directory.actions';

const HomePage = ({ fetchSectionsStart, fetchSectionItemsStart }) => {
    useEffect(() => {
        fetchSectionsStart();
        fetchSectionItemsStart();
    }, [fetchSectionsStart, fetchSectionItemsStart])
    return(
        // use directory component
        <HomePageContainer>
            <Routes>
                {/* This naturally shows the directory */}
                <Route path='' element={<DirectoryContainer/>} />
                {/* This shows the device page */}
                <Route path=':deviceId' element={<DevicePageContainer />} />
            </Routes>
        </HomePageContainer>
    );
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchSectionsStart: () => {
            return dispatch(fetchSectionsStart())
        },
        fetchSectionItemsStart: () => {
            return dispatch(fetchSectionItemsStart())
        }
    })
}

export default connect(null, mapDispatchToProps)(HomePage)