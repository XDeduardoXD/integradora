import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDmBHnqGylgWjrBzQZ9U8Q7zts7dMbqIg",
  authDomain: "iotapp-a1ead.firebaseapp.com",
  projectId: "iotapp-a1ead",
  storageBucket: "iotapp-a1ead.appspot.com",
  messagingSenderId: "466918626717",
  appId: "1:466918626717:web:c7cd73292f9b8a8aeb4b74"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

export{
    db,
    firebase
}