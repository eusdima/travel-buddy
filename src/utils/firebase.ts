import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyDt6x11mk6GHAnelXpk14dWiwunHXPj7Qk',
  authDomain: 'travel-buddy-764ad.firebaseapp.com',
  databaseURL: 'https://travel-buddy-764ad.firebaseio.com',
  projectId: 'travel-buddy-764ad',
  storageBucket: 'travel-buddy-764ad.appspot.com',
  messagingSenderId: '487826278428',
  appId: '1:487826278428:web:a07911a5d38826e87737d9',
  measurementId: 'G-0D2RZDKMWJ',
};

export const app = firebase.initializeApp(config);
