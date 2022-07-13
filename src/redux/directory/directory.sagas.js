import { all, takeLatest, call, put } from "@redux-saga/core/effects";
import { directoryActionTypes } from "./directory.types";
import { collection, getDocs } from '@firebase/firestore';
import { 
    db, 
    convertSectionsSnapshotToMap,
    convertSectionItemsSnapshotToMap
} from "../../firebase/firebase.utils";
import { 
    fetchSectionsSuccess, 
    fetchSectionsFailure,
    fetchSectionItemsFailure,
    fetchSectionItemsSuccess
 } from "./directory.actions";

// saga generator function that continues and completes the asynchronous task
export function* fetchSectionsAsync() {
    const sectionsRef = collection(db, 'sections');

    try {
        // get the snapshot from sectionsRef using yield in contrast 
        // to await since we are using generator function to get our 
        // asynchronous data from firestore
        const snapshot = yield getDocs(sectionsRef);
        // assign our modified snapshot(sections) to sectionsMap
        const sectionsMap = yield call(convertSectionsSnapshotToMap, snapshot);
        // dispatch our successful sections fetch using saga put
        yield put(fetchSectionsSuccess(sectionsMap));
    } catch(error) {
        // dispatch our failed sections fetch using put
        yield put(fetchSectionsFailure(error.message));
    }
}

export function* fetchSectionItemsAsync() {
    const sectionItemsRef = collection(db, 'sectionItems');

    try {
        const snapshot = yield getDocs(sectionItemsRef);
        const sectionItemsMap = yield call(convertSectionItemsSnapshotToMap, snapshot);
        yield put(fetchSectionItemsSuccess(sectionItemsMap));
    } catch(error) {
        yield put(fetchSectionItemsFailure(error.message));
    }
}

// saga generator function that init our redux saga (Note: 
// with this, our app isFetching property is set to true at 
// fetch start)
export function* fetchSectionsStart() {
    yield takeLatest(
        directoryActionTypes.FETCH_SECTIONS_START, 
        fetchSectionsAsync
    );
}

export function* fetchSectionItemsStart() {
    yield takeLatest(
        directoryActionTypes.FETCH_SECTION_ITEMS_START, 
        fetchSectionItemsAsync
    );
}

export function* directorySagas() {
    yield all([
        call(fetchSectionsStart),
        call(fetchSectionItemsStart)
    ])
}