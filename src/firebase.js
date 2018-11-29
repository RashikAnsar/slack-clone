import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var config = {
  apiKey: 'AIzaSyCi7pWNUnpXNPt--elCdD3xoeh_Hix0ELQ',
  authDomain: 'slack-clone-612b0.firebaseapp.com',
  databaseURL: 'https://slack-clone-612b0.firebaseio.com',
  projectId: 'slack-clone-612b0',
  storageBucket: 'slack-clone-612b0.appspot.com',
  messagingSenderId: '885020141689'
};
firebase.initializeApp(config);

export default firebase;
