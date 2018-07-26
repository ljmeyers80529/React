import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: authData.idToken,
        userId: authData.localId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDH0wBBOJVNKNbmV8XwfThVH-jzac09y_Y';
        if (!isSignup) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDH0wBBOJVNKNbmV8XwfThVH-jzac09y_Y';
        }
        axios.post(url, authData)
        .then(response => {
            console.log(response);
            dispatch(authSuccess(response.data))
        })
        .catch(err => {
            dispatch(authFail(err.response.data.error));
        });

    }
};