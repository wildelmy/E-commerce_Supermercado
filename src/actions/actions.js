import { types } from '../types/types.jsx'
import { auth } from '../firebase/firebaseConfig'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const loginGoogle = () => {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(login(user.uid, user.displayName))
        window.location.href = '/home'
      })
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

