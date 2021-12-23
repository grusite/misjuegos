import firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

export const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyATjICFY96bTvLgTudiA2AGu50w2oQmGWk',
  authDomain: 'misjuegos-b9cbc.firebaseapp.com',
  databaseURL: 'https://misjuegos-b9cbc-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'misjuegos-b9cbc',
  storageBucket: 'misjuegos-b9cbc.appspot.com',
  messagingSenderId: '476322127299',
  appId: '1:476322127299:web:2be417648ce5cc70aef176',
})

export const auth = getAuth()

export const db = getFirestore(firebaseApp)
