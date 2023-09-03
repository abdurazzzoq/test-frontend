import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXLknET6w7wOk5KUC59o2UpouXEfWoILw",
  authDomain: "test-c7b72.firebaseapp.com",
  projectId: "test-c7b72",
  storageBucket: "test-c7b72.appspot.com",
  messagingSenderId: "293487595429",
  appId: "1:293487595429:web:875bf808151cfbe3ef624c"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp;
const db = getFirestore();
const auth = getAuth();

export default app;
export { db, auth };

