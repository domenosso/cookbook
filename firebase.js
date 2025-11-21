const firebaseConfig = {
  apiKey: "AIzaSyDEwHxIUuux53r6NHlUk6YpfwchTYpOC9s",
  authDomain: "familycook.firebaseapp.com",
  databaseURL: "https://familycook-default-rtdb.firebaseio.com",
  projectId: "familycook",
  storageBucket: "familycook.firebasestorage.app",
  messagingSenderId: "603728866270",
  appId: "1:603728866270:web:ccbd68d1884695e6fd8b4f"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();