import { firebase, googleAuthProvider } from '../firebase/firebase';
import { LOGIN, LOGOUT } from './actionTypes';

export const login = uid => ({
  type: LOGIN,
  uid,
});

//--The "onAuthStateChanged" listener will handle dispatching
//--the login action creator.
export const startLogin = (email = undefined, password = undefined) => {
  return (dispatch) => {
    //If no email passed, then login with google
    if (!email) {
      firebase.auth().signInWithPopup(googleAuthProvider);
    } else {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(err => console.log(`Error logging in with Email: ${email} and Password: ${password} --- ${err}`));
    }
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
