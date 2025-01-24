import { initializeApp } from "@react-native-firebase/app";
import { getFirestore } from "@react-native-firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyAyYDdIYvQ3rw0LGBGrtGZaisnfn0iXnZc",
  authDomain: "messenger-q.firebaseapp.com",
  databaseURL: "https://messenger-q-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "messenger-q",
  storageBucket: "messenger-q.appspot.com",
  messagingSenderId: "333100533712",
  appId: "1:333100533712:web:6967eae31c3bf733e31bd5",
  measurementId: "G-ZN9DT4ZH16"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export { app};
