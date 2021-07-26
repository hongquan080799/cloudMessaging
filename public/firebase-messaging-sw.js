importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js')

var firebaseConfig = {
    apiKey: "AIzaSyD2GZztxgKr8HAUxDQxODRokeDAd33X2TY",
    authDomain: "tmdt-17064.firebaseapp.com",
    projectId: "tmdt-17064",
    storageBucket: "tmdt-17064.appspot.com",
    messagingSenderId: "38030940951",
    appId: "1:38030940951:web:ae9ad80cb7fe493e3c3552"
  };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging()

  messaging.onBackgroundMessage(function(payload) {
    console.log('onMessage: ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });