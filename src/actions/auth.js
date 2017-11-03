import { firebase, googleAuthProvider } from '../firebase/firebase';
import { LOGIN, LOGOUT } from './actionTypes';

export const login = uid => ({
  type: LOGIN,
  uid,
});

//--The "onAuthStateChanged" listener will handle dispatching
//--the login action creator.
export const startLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => ({
  type: LOGOUT,
});

export const startLogout = () => {
  return (dispatch) => {
    firebase.auth().signOut();
    dispatch(logout());
  };
};
