import { takeLatest, call, put, all } from "redux-saga/effects";
import { userActionTypes } from "./user.types";
import { createUserProfileDocument, googleProvider, auth, getCurrentUser } from "../../firebase/firebase.utils";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { getDoc } from '@firebase/firestore';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInSuccess, signInFailure, signOutFailure, signOutSuccess, signUpSuccess, signUpFailure } from "./user.actions";

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        // create user ref
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        // get user snapshot
        const userSnapshot = yield getDoc(userRef);
        // dispatch googleSignInSuccess while passing in the payload from userSnapshot
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch(error) {
        // dispatch error
        yield put(signInFailure(error.message));
    }
}

// saga generator function that continues and completes the asynchronous task for auth related to google
export function* signInWithGoogle() {
    try {
        // get the user object from google signIn
        const { user } = yield signInWithPopup(auth, googleProvider);

        // invoke getSnapshotFromUserAuth
        yield getSnapshotFromUserAuth(user);
    } catch(error) {
        // dispatch error
        yield put(signInFailure(error.message));
    }
}

// saga generator function that init our redux saga for google sign in
export function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

// saga generator function that continues and completes the asynchronous task for auth related to email and password sign in
export function* signInWithEmail({ payload: { email, password } }) {
    try {
        // get the user object from email signIn
        const { user } = yield signInWithEmailAndPassword(auth, email, password);
        
        // invoke getSnapshotFromUserAuth
        yield getSnapshotFromUserAuth(user);
    } catch(error) {
        yield put(signInFailure(error.message))
    }
}

// saga generator function that init our redux saga for google sign in
export function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

// saga generator function that continues and completes the asynchronous task for checking user session
export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) {
            return;
        }
        yield getSnapshotFromUserAuth(userAuth);
    } catch(error) {
        yield put(signInFailure(error))
    }
}

// saga generator function that init our redux saga for user session check
export function* onCheckUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

// saga generator function that continues and completes the asynchronous task for signing user out
export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch(error) {
        yield put(signOutFailure(error));
    }
}

// saga generator function that init our redux saga for user sign out
export function* onSignOutStart() {
    yield takeLatest(userActionTypes.SIGN_OUT_START, signOut)
}

// saga generator function that continues and completes the asynchronous task for signing user up
export function* signUp({payload: { email, password, displayName }}) {
    try {
        const { user } = yield createUserWithEmailAndPassword(auth, email, password);
        yield put(signUpSuccess({ user, additionalData: { displayName } }))
    } catch(error) {
        yield put(signUpFailure(error));
    }
}

// saga generator function that init our redux saga for user sign up
export function* onSignUpStart() {
    yield takeLatest(userActionTypes.SIGN_UP_START, signUp)
}

// saga generator function that continues and completes the asynchronous task for signing in after successful sign up
export function* signInAfterSignUp({payload: { user, additionalData }}) {
    yield getSnapshotFromUserAuth(user, additionalData)
}

// saga generator function that init our redux saga for user successful sign up
export function* onSignUpSuccess() {
    yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ])
}