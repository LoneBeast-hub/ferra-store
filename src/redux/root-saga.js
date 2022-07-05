import { all, call } from "@redux-saga/core/effects";
import { directorySagas } from "./directory/directory.sagas";

function* rootSaga() {
    yield all([
        call(directorySagas)
    ])
};

export default rootSaga;