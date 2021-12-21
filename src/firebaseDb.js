import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBnIRyTDkcpnkyKtsYoqu3IMeIGZzO3bMg",

  authDomain: "products-92744.firebaseapp.com",

  projectId: "products-92744",

  storageBucket: "products-92744.appspot.com",

  messagingSenderId: "633489372134",

  appId: "1:633489372134:web:56da301991ea7aeeb15c27",

  measurementId: "G-CPJZ7LM8B3"

}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();