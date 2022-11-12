import firebase from 'firebase';

// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD_SfHkfTSy6eMZ_jMuOmPhDEDPYnC6zDs",
    authDomain: "pro-c58-newsletter-2.firebaseapp.com",
    databaseURL: "https://pro-c58-newsletter-2-default-rtdb.firebaseio.com",
    projectId: "pro-c58-newsletter-2",
    storageBucket: "pro-c58-newsletter-2.appspot.com",
    messagingSenderId: "310038877569",
    appId: "1:310038877569:web:0b1fc418d0ff37e3380480"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();