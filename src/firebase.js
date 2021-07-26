import firebase from 'firebase/app';
import 'firebase/messaging';
var firebaseConfig = {
    apiKey: "AIzaSyD2GZztxgKr8HAUxDQxODRokeDAd33X2TY",
    authDomain: "tmdt-17064.firebaseapp.com",
    projectId: "tmdt-17064",
    storageBucket: "tmdt-17064.appspot.com",
    messagingSenderId: "38030940951",
    appId: "1:38030940951:web:ae9ad80cb7fe493e3c3552"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging()
  messaging.requestPermission()
  .then(()=>{
      console.log('have a permission')
      return messaging.getToken();
  })
  .then((token)=>{
      console.log(token)
  })
  .catch(()=>{
      console.log('error occured')
  })

  messaging.onMessage((payload)=>{
      console.log('onMessage: ',payload)
  });
  export default firebase;