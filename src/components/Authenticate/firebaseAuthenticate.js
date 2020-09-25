import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'


firebase.initializeApp(firebaseConfig);

export const googleSingIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider).then(result => {
    const user = result.user;
    return user;
  }).catch(function(error) {
    console.log(error);
  });

}
export const facebookSignin = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider).then(result => {
      const user = result.user;
      return user;
    }).catch(function(error) {
      console.log(error);
    });
  
  }

export const emailSingup = (email,password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .catch(function(error) {
    console.log(error)
   
  });
}
  