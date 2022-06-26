import { MenuItem } from '../menu-item/menu-item.component';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

// styled Component
import { DirectoryMenuContainer } from './directory.styles';

const Directory = ({ sections }) => {
  return(
    // directory menu
      <DirectoryMenuContainer>
          {
              sections.map(
                  ({id, ...otherSectionProps}) => {
                      return(
                          // use MenuItem component
                          <MenuItem key={id} { ...otherSectionProps } />
                      );
                  }
              )
          }
      </DirectoryMenuContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);