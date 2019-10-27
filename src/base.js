import * as firebase from 'firebase';

const db = firebase.initializeApp({
        apiKey: "AIzaSyARQuio6pteDA4NNhEbeIr67SXJPOomydE",
        authDomain: "cse110firebase-8d3b0.firebaseapp.com",
        databaseURL: "https://cse110firebase-8d3b0.firebaseio.com",
        projectId: "cse110firebase-8d3b0",
        storageBucket: "cse110firebase-8d3b0.appspot.com",
        messagingSenderId: "886407427246",
        appId: "1:886407427246:web:aa8cc48c1fc86da647a93f",
        measurementId: "G-66ZEZQ142F"
});

export default db;