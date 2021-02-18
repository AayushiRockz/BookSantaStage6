import firebase from 'firebase';
require('@firebase/firestore')
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyD4J70ckza71pWicxcLkigAHK9AyF1hP9s",
  authDomain: "booksantanew-fd6a4.firebaseapp.com",
  projectId: "booksantanew-fd6a4",
  storageBucket: "booksantanew-fd6a4.appspot.com",
  messagingSenderId: "66440712350",
  appId: "1:66440712350:web:79cf95190103433c3c6b8f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
