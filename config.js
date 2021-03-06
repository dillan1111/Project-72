import * as firebase from 'firebase';
    require('@firebase/firestore')
    const firebaseConfig = {
        apiKey: "AIzaSyCxpMrNqCjhwUWxjj77-BnLAN5Q51C9Bdk",
        authDomain: "story-hub-2248c.firebaseapp.com",
        projectId: "story-hub-2248c",
        storageBucket: "story-hub-2248c.appspot.com",
        messagingSenderId: "1048813423641",
        appId: "1:1048813423641:web:c1069bc3ee4ad90cdb2e88"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
