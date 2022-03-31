import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdtTKKIDyoS3qabq1VLY8L9vZl2eujysw",
  authDomain: "selva-pets-2.firebaseapp.com",
  projectId: "selva-pets-2",
  storageBucket: "selva-pets-2.appspot.com",
  messagingSenderId: "745922927691",
  appId: "1:745922927691:web:70afc4de37596dc244c1ce"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

export{
    db,
    firebase
}