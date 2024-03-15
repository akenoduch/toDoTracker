import { getFirestore, collection, addDoc } from 'firebase/firestore';
import app from '../../../firebaseConfig';
import { getAuth } from 'firebase/auth';

interface TaskData {
  title: string;
  content: string;
}

export const createTask = async (taskData: TaskData) => {
  const db = getFirestore(app);
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    const tasksCollectionRef = collection(db, 'Tasks');
    const createdAt = new Date(); 
    const task = {
      ...taskData,
      ownerId: user.uid,
      date: createdAt.toISOString(), 
      isCompleted: false, 
    };

    try {
      const docRef = await addDoc(tasksCollectionRef, task);
      return docRef.id;
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  } else {
    throw new Error('No user is signed in.');
  }
};
