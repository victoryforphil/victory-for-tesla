import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import Config from "./config"

firebase.initializeApp(Config.firebase);
export const auth = firebase.auth();
export const firestore = firebase.firestore();