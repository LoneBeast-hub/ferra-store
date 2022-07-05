import { directoryActionTypes } from "./directory.types";

export const fetchSectionsStart = () => {
    return({
        type: directoryActionTypes.FETCH_SECTIONS_START
    })
}

export const fetchSectionItemsStart = () => {
    return({
        type: directoryActionTypes.FETCH_SECTION_ITEMS_START
    })
}

export const fetchSectionsSuccess = (sectionsMap) => {
    return({
        type: directoryActionTypes.FETCH_SECTIONS_SUCCESS,
        payload: sectionsMap
    })
}

export const fetchSectionItemsSuccess = (sectionsMap) => {
    return({
        type: directoryActionTypes.FETCH_SECTION_ITEMS_SUCCESS,
        payload: sectionsMap
    })
}

export const fetchSectionsFailure = (errorMessage) => {
    return({
        type: directoryActionTypes.FETCH_SECTIONS_FAILURE,
        payload: errorMessage
    })
}

export const fetchSectionItemsFailure = (errorMessage) => {
    return({
        type: directoryActionTypes.FETCH_SECTION_ITEMS_FAILURE,
        payload: errorMessage
    })
}