import { initializeApp } from 'firebase/app';
import FirebaseConfig from './FirebaseConfig';

const initialAuth=()=>{
    initializeApp(FirebaseConfig);
}
export default initialAuth;