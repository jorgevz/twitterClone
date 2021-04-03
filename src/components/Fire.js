import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDgQBnJ-UsVJppfe0mT2ZKPqJngxGtRpk8",
    authDomain: "twitterclone-2dc24.firebaseapp.com",
    projectId: "twitterclone-2dc24",
    storageBucket: "twitterclone-2dc24.appspot.com",
    messagingSenderId: "713065226605",
    appId: "1:713065226605:web:bbf60ed64db0a77b5a3a64"
  };


 const Fire = firebase.initializeApp(firebaseConfig);


 export default Fire; 