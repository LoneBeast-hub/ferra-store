import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { DevicePreview } from '../device-preview/device-preview.component';
import { selectSectionItemsAsArray } from '../../redux/directory/directory.selectors';

// styled components
import { DeviceOverviewContainer } from './device-overview.styles';

const DevicesOverview = ({ sectionItems }) => {
    return(
        <DeviceOverviewContainer>
            {
                sectionItems.map(({id, ...otherDeviceProps}) => {
                    return(
                        <DevicePreview key={id} {...otherDeviceProps} />
                    );
                })
            }
        </DeviceOverviewContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    sectionItems: selectSectionItemsAsArray
})

export default connect(mapStateToProps)(DevicesOverview);