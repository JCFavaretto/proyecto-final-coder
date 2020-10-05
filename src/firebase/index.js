import * as firebase from "firebase/app";
import "firebase/firestore";
import { firebaseConfig } from "config/firebase.config";

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
