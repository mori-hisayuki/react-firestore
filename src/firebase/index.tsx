import * as firebase from 'firebase/app';
import "firebase/firestore";
import { FIREBASE_CONFIG } from './config';

export class FireBase {

    private static singleInstance: FireBase;

    public readonly firebase: firebase.app.App;
    public readonly firestore: firebase.firestore.Firestore;

    private constructor() {
        this.firebase = firebase.initializeApp(FIREBASE_CONFIG);
        this.firestore = this.firebase.firestore();
    }

    public static get instance(): FireBase {
        if (!this.singleInstance) {
            this.singleInstance = new FireBase();
        }
        return this.singleInstance;
    }
}
