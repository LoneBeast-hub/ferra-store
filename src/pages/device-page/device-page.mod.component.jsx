import { useParams } from "react-router-dom";
import DevicePage from './device-page.component'

export const DevicePageMod = (props) => {
    // get the custom params
    let { deviceId } = useParams();
    return(
        <div>
            <DevicePage deviceId={deviceId} {...props} />
        </div>
    )
}
