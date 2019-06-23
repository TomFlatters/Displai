import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCUj8sKk7Sr0aAC020fgSA603vysNKaCBE",
    authDomain: "displai-app.firebaseapp.com",
    databaseURL: "https://displai-app.firebaseio.com",
    projectId: "displai-app",
    storageBucket: "",
    messagingSenderId: "300712693609",
    appId: "1:300712693609:web:4898e621a5e4d3c1"
  };

const fire = firebase.initializeApp(firebaseConfig)

export default fire;