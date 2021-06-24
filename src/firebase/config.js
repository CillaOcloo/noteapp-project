import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA44vStwXJ_eGcroHbwWV3l0R-YjsmNFHk",
    authDomain: "noteapp-fb.firebaseapp.com",
    projectId: "noteapp-fb",
    storageBucket: "noteapp-fb.appspot.com",
    messagingSenderId: "36237408427",
    appId: "1:36237408427:web:e97db94ba7891059971fee"
  };
  
  firebase.initializeApp(firebaseConfig)

  export default firebase;