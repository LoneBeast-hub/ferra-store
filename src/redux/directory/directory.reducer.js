// import { DIRECTORY_DATA } from "./directory.data";
import { directoryActionTypes } from "./directory.types";

const INITIAL_STATE = {
    sections: null,
    isFetching: false,
    errorMessage: undefined,
    sectionItems: null
};

export const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case directoryActionTypes.FETCH_SECTIONS_START:
        case directoryActionTypes.FETCH_SECTION_ITEMS_START:
            return({
                ...state,
                isFetching: true
            })
        case directoryActionTypes.FETCH_SECTIONS_SUCCESS:
            return({
                ...state,
                isFetching: false,
                sections: action.payload
            })
        case directoryActionTypes.FETCH_SECTION_ITEMS_SUCCESS:
            return({
                ...state,
                isFetching: false,
                sectionItems: action.payload
            })
        case directoryActionTypes.FETCH_SECTIONS_FAILURE:
        case directoryActionTypes.FETCH_SECTION_ITEMS_FAILURE:
            return({
                ...state,
                isFetching: false,
                errorMessage: action.payload
            })
        default:
            return state;
    }
}