import { types } from '../types/types.jsx'
import { auth } from '../firebase/firebaseConfig'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const loginGoogle = () => {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        dispatch(login(user.uid, user.displayName))
        window.location.href = '/home'
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }
}

export const login = (id, displayname) => {
  return {
    type: types.login,
    payload: {
      id,
      displayname
    }
  }
}

