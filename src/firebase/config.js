import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyDqugsKJrf8LNZXLgAIjNM5lgp0qaRZGkM",
  authDomain: "excaldev-firegram.firebaseapp.com",
  databaseURL: "https://excaldev-firegram.firebaseio.com",
  projectId: "excaldev-firegram",
  storageBucket: "excaldev-firegram.appspot.com",
  messagingSenderId: "1055937199405",
  appId: "1:1055937199405:web:5db333c6ffc5f90c0867a4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFireStore, timestamp };
