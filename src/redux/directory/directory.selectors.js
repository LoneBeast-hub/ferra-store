import { createSelector } from "reselect";
// import { convertArrayToMap } from "./directory.utils";

// input selector for directory
const selectDirectory = (state) => {
    return state.directory;
}

// output selectors
// select directory data
export const selectDirectorySections = createSelector([selectDirectory], (directory) => {
    return directory.sections
})

// select sectionItems
export const selectSectionItems = createSelector([selectDirectory], (directory) => {
    return directory.sectionItems
})

// select directory data as array
export const selectDirectorySectionsAsArray = createSelector([selectDirectorySections], (sections) => {
    // change sections data to an array
    if(sections) {
        return(Object.keys(sections).map(key => {
            return(sections[key])
        }));
    } else {
        return([])
    }
})

// select section items as array
export const selectSectionItemsAsArray = createSelector([selectSectionItems], (sectionItems) => {
    // change sections data to an array
    if(sectionItems) {
        return(Object.keys(sectionItems).map(key => {
            return(sectionItems[key])
        }));
    } else {
        return([])
    }
})

// select device
export const selectDevice = (deviceUrlParam) => {
    return(
        createSelector([selectSectionItems], (sectionItems) => {
            // return the device matching the url param id
            return(sectionItems? sectionItems[deviceUrlParam] : null);
        })
    );
}

export const selectIsSectionFetching = createSelector([selectDirectory], (directory) => {
    return(directory.isFetching);
});

export const selectIsSectionItemsFetching = createSelector([selectDirectory], (directory) => {
    return(directory.isFetching)
})

export const selectIsSectionItemsLoaded = createSelector([selectDirectory], (directory) => {
    return !!directory.sectionItems
})