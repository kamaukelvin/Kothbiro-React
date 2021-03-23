import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyDRXIMYjZU8G7vJ5uWQY_P71jzmSXLMazo",
  authDomain: "tournamentapp-553d2.firebaseapp.com",
  databaseURL: "https://tournamentapp-553d2.firebaseio.com",
  projectId: "tournamentapp-553d2",
  storageBucket: "tournamentapp-553d2.appspot.com",
  messagingSenderId: "33169946826",
  appId: "1:33169946826:web:54827f90ed4f0aec841c33",
  measurementId: "G-1P8VCZ7T7X",
};

firebase.initializeApp(config);

export default firebase.database();
