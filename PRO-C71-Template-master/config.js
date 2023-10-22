import firebase from "firebase";


//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyD98ZdI7TpPFuD1_d-BNIttuB2EUvbPm0Y",
    authDomain: "c-58-buzzer-app-project.firebaseapp.com",
    databaseURL: "https://c-58-buzzer-app-project-default-rtdb.firebaseio.com",
    projectId: "c-58-buzzer-app-project",
    storageBucket: "c-58-buzzer-app-project.appspot.com",
    messagingSenderId: "778867185799",
    appId: "1:778867185799:web:4ffedfec333ba6d1e80022"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig); 
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
