import * as firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCQ0bSE6WIoUo66vj4NUJ0__Iw_WypWWQA",
  authDomain: "e-commerce-coder.firebaseapp.com",
  databaseURL: "https://e-commerce-coder.firebaseio.com",
  projectId: "e-commerce-coder",
  storageBucket: "e-commerce-coder.appspot.com",
  messagingSenderId: "792177529557",
  appId: "1:792177529557:web:990843b0fa1b442e25885c",
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
