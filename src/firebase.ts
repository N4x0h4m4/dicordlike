import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  //apiKey: "AIzaSyBRV5jJRu7oQoQ9hNcmvcVdT6IzvvD7BF4",
  apiKey: "AIzaSyA5U8dSM5JPZiPDuPDE5H3ANIAlkI38AUw",
  authDomain: "discordlike-97319.firebaseapp.com",
  //projectId: "discord-clone-83b08",
  projectId: "discordlike-97319",
  storageBucket: "discordlike-97319.appspot.com",
  //messagingSenderId: "393399833089",
  messagingSenderId: "1072324506093",
  //appId: "1:393399833089:web:f60b51803644790a16e600",
  appId: "1:1072324506093:web:e0ef7e11dd1de56bb3f7e4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
// export default db;
