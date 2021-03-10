import firebase from 'firebase';
  
var firebaseConfig = {
    apiKey: "AIzaSyAum75lUtnGFjbYiswRRjQN_FjbXYO3_Gk",
    authDomain: "fir-auth-c5a34.firebaseapp.com",
    projectId: "fir-auth-c5a34",
    storageBucket: "fir-auth-c5a34.appspot.com",
    messagingSenderId: "30747946156",
    appId: "1:30747946156:web:0afbf90256fab96c4b0309",
    measurementId: "G-JN5QJGRK4E"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;