import { connect } from "react-redux";
import { compose } from "redux";
import DevicesOverview from './device-overview.component';
import { createStructuredSelector } from "reselect";
import { selectIsSectionItemsFetching } from "../../redux/directory/directory.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsSectionItemsFetching
});

const DevicesOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(DevicesOverview);

export default DevicesOverviewContainer;