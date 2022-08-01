import { all, call } from "@redux-saga/core/effects";
import { directorySagas } from "./directory/directory.sagas";
import { userSagas } from "./user/user.sagas";

function* rootSaga() {
    yield all([
        call(directorySagas),
        call(userSagas)
    ])
};

export default rootSaga;