import { connect } from "react-redux";
import { compose } from "redux";
import { DevicePageMod } from "./device-page.mod.component";
import { createStructuredSelector } from "reselect";
import { selectIsSectionItemsLoaded } from "../../redux/directory/directory.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => {
        return !selectIsSectionItemsLoaded(state);
    }
})

const DevicePageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(DevicePageMod);

export default DevicePageContainer;