import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDJglit49oiX_l0TLw9EzCjQoUigox5dPc",
    authDomain: "migo-8e856.firebaseapp.com",
    projectId: "migo-8e856",
    storageBucket: "migo-8e856.appspot.com",
    messagingSenderId: "95939663662",
    appId: "1:95939663662:web:79c139c6670279e06dccbf",
    measurementId: "G-NLH9DQV1E9"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ experimentalForceLongPolling: true , merge: true});

export default firebase;