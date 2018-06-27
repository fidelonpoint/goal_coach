import * as firebase from 'firebase';

const config ={
    apiKey: "your_api_key_here",
    authDomain: "goalcoach-1ccd7.firebaseapp.com",
    databaseURL: "https://goalcoach-1ccd7.firebaseio.com",
    projectId: "project_id_ here",
    storageBucket: "",
    messagingSenderId: "xxxxxxxxxxx"
  };

export const firebaseApp = firebase.initializeApp(config);
