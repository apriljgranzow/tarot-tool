import React from 'react';
import ReactDOM from 'react-dom';
import { initializeApp } from 'firebase/app';
import App from './components/App';

const firebaseConfig = {
  apiKey: 'AIzaSyAwFASsj2sGt2RPrtoD1hOAwqj6PWKcbu0',
  authDomain: 'tarot-tool.firebaseapp.com',
  projectId: 'tarot-tool',
  storageBucket: 'tarot-tool.appspot.com',
  messagingSenderId: '1080201959009',
  appId: '1:1080201959009:web:351a405039878749ce3c20',
  measurementId: 'G-YEDKW0ZW75',
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('app'));
