import { userActionTypes } from "./user.types"

// google auth process actions
export const googleSignInStart = () => {
    return({
        type: userActionTypes.GOOGLE_SIGN_IN_START
    });
}

export const signInSuccess = (user) => {
    return({
        type: userActionTypes.SIGN_IN_SUCCESS,
        payload: user
    });
}

export const signInFailure = (error) => {
    return({
        type: userActionTypes.SIGN_IN_FAILURE,
        payload: error
    });
}

// email auth process actions
export const emailSignInStart = (emailAndPassword) => {
    return({
        type: userActionTypes.EMAIL_SIGN_IN_START,
        payload: emailAndPassword
    });
}

// check user session
export const checkUserSession = () => {
    return({
        type: userActionTypes.CHECK_USER_SESSION
    });
}

// signing user out process actions
export const signOutStart = () => {
    return({
        type: userActionTypes.SIGN_OUT_START
    });
}

export const signOutSuccess = () => {
    return({
        type: userActionTypes.SIGN_OUT_SUCCESS
    });
}

export const signOutFailure = (error) => {
    return({
        type: userActionTypes.SIGN_OUT_FAILURE,
        payload: error
    });
}

// sign user up process actions
export const signUpStart = (userCredentials) => {
    return({
        type: userActionTypes.SIGN_UP_START,
        payload: userCredentials
    });
}

export const signUpSuccess = ({ user, additionalData }) => {
    return({
        type: userActionTypes.SIGN_UP_SUCCESS,
        payload: { user, additionalData }
    });
}

export const signUpFailure = (error) => {
    return({
        type: userActionTypes.SIGN_UP_FAILURE,
        payload: error
    })
}