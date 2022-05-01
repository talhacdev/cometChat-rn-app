import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBs6vi6C9335Md_r4dp3JNH6m4v36OWZV4',
  authDomain: 'cometchat-11be9.firebaseapp.com',
  projectId: 'cometchat-11be9',
  storageBucket: 'cometchat-11be9.appspot.com',
  messagingSenderId: '311191971970',
  appId: '1:311191971970:web:1da48739a6dc69836dec9b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
