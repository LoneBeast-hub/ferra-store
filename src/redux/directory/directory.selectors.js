import { createSelector } from "reselect";
import { convertArrayToMap } from "./directory.utils";

// input selector for directory
const selectDirectory = (state) => {
    return state.directory;
}

// output selectors
// select directory data
export const selectDirectorySections = createSelector([selectDirectory], (directory) => {
    return directory.sections
})

// select device
export const selectDevice = (deviceUrlParam) => {
    return(
        createSelector([selectDirectorySections], (sections) => {
            // get new sections as an object
            const newSections = convertArrayToMap(sections);
            
            // return the device matching the url param id
            return(newSections[deviceUrlParam]);
        })
    );
}