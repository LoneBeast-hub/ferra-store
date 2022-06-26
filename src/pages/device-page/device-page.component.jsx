import { connect } from 'react-redux';
import { selectDevice } from '../../redux/directory/directory.selectors';
import DeviceItem from '../../components/device-item/device-item.component';
import { DevicePageContainer, TitleContainer, ItemsContainer } from './device-page.styles';

const DevicePage = ({ device }) => {
    const { title, items } = device;
    return(
        <DevicePageContainer>
            <TitleContainer> {title} </TitleContainer>
            <ItemsContainer>
                {items.map((item) => {
                    return(<DeviceItem key={item.id} item={item} />)
                })}
            </ItemsContainer>
        </DevicePageContainer>
    );
}

const mapStateToProps = (state, ownProps) => {
    return({
        device: selectDevice(ownProps.deviceId)(state)
    });
}

export default connect(mapStateToProps)(DevicePage);