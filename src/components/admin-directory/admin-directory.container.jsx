import { connect } from "react-redux";
import { compose } from "redux";
import AdminDirectory from "./admin-directory.component";
import { createStructuredSelector } from "reselect";
import { selectIsSectionFetching } from "../../redux/directory/directory.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsSectionFetching
});

const AdminDirectoryContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(AdminDirectory);

export default AdminDirectoryContainer;