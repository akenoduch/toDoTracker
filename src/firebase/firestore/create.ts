import { createUserWithEmailAndPassword, updateProfile, getAuth } from 'firebase/auth';
import { doc, setDoc, getFirestore } from 'firebase/firestore';
import app from '../../../firebaseConfig';

interface UserRegistrationData {
  email: string;
  password: string;
  displayName: string;
}

const db = getFirestore(app);

export async function registerUser({ email, password, displayName }: UserRegistrationData) {
    const auth = getAuth(app);
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
  
    await updateProfile(user, { displayName });
  
    const userData = {
      email: email, 
      displayName,
      createdAt: new Date(),
    };
  
    await setDoc(doc(db, 'users', user.uid), userData);
  
    return user; 
}
