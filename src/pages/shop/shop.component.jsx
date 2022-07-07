import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSectionItemsStart } from '../../redux/directory/directory.actions';
import { ShopPageContainer } from './shop.styles';

// pages
import DevicesOverviewContainer from '../../components/device-overview/device.container';
import DevicePageContainer from '../device-page/device-page.container';

const ShopPage = ({ fetchSectionItemsStart }) => {
    useEffect(() => {
        fetchSectionItemsStart()
    }, [fetchSectionItemsStart])

    return(
        <ShopPageContainer>
            <Routes>
                {/* This naturally shows the directory */}
                <Route path='' element={<DevicesOverviewContainer />} />
                {/* This shows the device page */}
                <Route path=':deviceId' element={<DevicePageContainer />} />
            </Routes>
        </ShopPageContainer>
    );
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchSectionItemsStart: () => {
            return dispatch(fetchSectionItemsStart())
        }
    });
}

export default connect(null, mapDispatchToProps)(ShopPage);