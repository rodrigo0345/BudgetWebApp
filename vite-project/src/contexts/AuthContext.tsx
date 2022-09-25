import React, {useEffect} from 'react'
import { auth, provider } from '../firebase.js'
import { signInWithPopup, GoogleAuthProvider, signOut, getRedirectResult } from 'firebase/auth'

const AuthContext = React.createContext({});

const useAuth = () => React.useContext(AuthContext);

export default function AuthProvider({children}: any) {
  let currentUser: any = null;
  let setCurrentUser: any = null;
  [currentUser, setCurrentUser] = React.useState(null);

  const signIn = () => {

    signInWithPopup(auth, provider)
      .then((result:any) => {
        const credential:any = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        setCurrentUser(result.user);
      }).catch((error:object) => {
        throw error;
      });

  } 

  const signInWithRedirect = () => {
    getRedirectResult(auth)
      .then((result:any) => {
        if (result.credential) {
          const credential:any = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          setCurrentUser(result.user);
        }
      }).catch((error:object) => {
        throw error;
      });
  }

  const signOut = () => {

    try{
      auth.signOut();
    }
    catch(error){
      throw error;
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user);
    })

    return unsubscribe;
}, []);

  const value = {
    currentUser,
    signIn,
    signInWithRedirect,
    signOut,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export { useAuth };
