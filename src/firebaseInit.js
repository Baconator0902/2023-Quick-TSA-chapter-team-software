import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js';
import { getAuth, setPersistence, browserSessionPersistence } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js';
import { getStorage, ref} from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-storage.js'
 
export * from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js';
export * from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js';
export * from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js';

const firebaseConfig = {
    apiKey: "AIzaSyDU9do-sVjgTrk1anRHgI747oVJa2o243w",
    authDomain: "software2023-6ad0d.firebaseapp.com",
    databaseURL: "https://software2023-6ad0d-default-rtdb.firebaseio.com",
    projectId: "software2023-6ad0d",
    storageBucket: "software2023-6ad0d.appspot.com",
    messagingSenderId: "190584766811",
    appId: "1:190584766811:web:2336fe7cfba09769e21a7e",
    measurementId: "G-QQ4BLGPG72"
};
  
// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
setPersistence(auth, browserSessionPersistence);
export const database = getDatabase(firebaseApp);
export const storage = getStorage(firebaseApp);

export const storageRef = ref(storage, 'files');