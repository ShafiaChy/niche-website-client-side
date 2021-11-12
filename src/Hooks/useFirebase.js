import { useState,useEffect } from "react";
import {  getAuth, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";




initializeAuthentication();
const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [user, setUser] = useState({});
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const signInWithGoogle = (email,password,location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                saveUsers(user.email, user.displayName, 'PUT');
                setAuthError('');
                const redirect_uri = location?.state?.from || '/home';
              
                   history.replace(redirect_uri);
              
                
            })
         
           
            .catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
        
 }

//    const loginWithEmailAndPassword=(email,password)=>{
//     //    console.log(email,password)
//     return signInWithEmailAndPassword(auth,email,password);
//    }

const loginWithEmailAndPassword = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    
        .then((userCredential) => {
          
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('');
           
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
}
//    const createAccount = (email,password) => {
      
//         return createUserWithEmailAndPassword(auth,email,password)

     
//     }

    useEffect(() =>{
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user.email])

const createAccount = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = { email, displayName: name };
            setUser(newUser);
            // save user to the database
            saveUsers(email, name, 'POST');
            // send name to firebase after creation
            updateProfile(auth.currentUser, {
                displayName: name
            })
            .then(() => {
            })
            .catch((error) => {
            });
            history.replace('/');
        })
        .catch((error) => {
            setAuthError(error.message);
            
        })
        .finally(() => setIsLoading(false));
}

    // const updateName = (name) => {
    //     updateProfile(auth.currentUser, {
    //         displayName:name
    //       })
    //       .then(() =>{
    //           window.location.reload();
    //       })
    // }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => { setIsLoading(false) });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              setUser(user);
              // ...
            } else {
              // User is signed out
              setUser({});
            }
            setIsLoading(false);
          });
          return () => unsubscribe;
    }, [auth])

   const saveUsers = (email, displayName, method) =>{
       const user = {email, displayName};
       fetch('http://localhost:5000/users',{
           method:method,
           headers:{
            'content-type':'application/json'
           },
           body: JSON.stringify(user)
       })
       .then()
   }
   

    return {
        user,
        admin,
        auth,
        authError,
        isLoading,
        createAccount,
        signInWithGoogle,
        loginWithEmailAndPassword,
        logOut

    }
}

export default useFirebase;