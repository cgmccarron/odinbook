import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnJ8Cpqt8SI7lwor6x_I1o5CPf9TjO19c",
  authDomain: "odinbook-b82b7.firebaseapp.com",
  projectId: "odinbook-b82b7",
  storageBucket: "odinbook-b82b7.appspot.com",
  messagingSenderId: "399210346956",
  appId: "1:399210346956:web:df94b8143b6c6e85424569",
  measurementId: "G-FLT9QDLYD4",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export { auth, provider };
export default firebaseApp;
