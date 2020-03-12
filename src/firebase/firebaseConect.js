import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAASggftdx6HoM4YJX2HvUk2AMV6PWRhRo",
    authDomain: "nilson-diniz.firebaseapp.com",
    databaseURL: "https://nilson-diniz.firebaseio.com",
    projectId: "nilson-diniz",
    storageBucket: "nilson-diniz.appspot.com",
    messagingSenderId: "216276285560",
    appId: "1:216276285560:web:f813c2dba700d8f285958d",
    measurementId: "G-M4V4J3X7SW"
  };
   if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;