import * as firebase from 'firebase/app';
import "firebase/firestore";
import { FIREBASE_CONFIG } from './config';

export const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
export const firestore = firebaseApp.firestore();
