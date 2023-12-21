
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAsYsFFU_AuiXLlVUFoZskhS0GoEuBfvoI",
  authDomain: "task-management-7207c.firebaseapp.com",
  projectId: "task-management-7207c",
  storageBucket: "task-management-7207c.appspot.com",
  messagingSenderId: "449813526719",
  appId: "1:449813526719:web:da70172b63d7a3f3a26e0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app