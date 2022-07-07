import DirectoryContainer from '../../components/directory/directory.container';
import { HomePageContainer } from './homepage.styles';
import { useEffect } from 'react';
import { connect } from 'react-redux/es/exports';
import { fetchSectionsStart } from '../../redux/directory/directory.actions';

const HomePage = ({ fetchSectionsStart }) => {
    useEffect(() => {
        fetchSectionsStart()
    }, [fetchSectionsStart])
    return(
        // use directory component
        <HomePageContainer>
            <DirectoryContainer />
        </HomePageContainer>
    );
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchSectionsStart: () => {
            return(dispatch(fetchSectionsStart()))
        }
    })
}

export default connect(null, mapDispatchToProps)(HomePage);