import { connect } from "react-redux";
import { compose } from "redux";
import Directory from './directory.component';
import { createStructuredSelector } from "reselect";
import { selectIsSectionFetching } from "../../redux/directory/directory.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsSectionFetching
});

const DirectoryContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Directory);

export default DirectoryContainer;