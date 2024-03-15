import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import app from '../../../firebaseConfig';
import { getAuth } from 'firebase/auth';

interface UpdateTaskData {
  taskId: string;
  title: string;
  content: string;
}

export const updateTask = async ({ taskId, title, content }: UpdateTaskData) => {
  const db = getFirestore(app);
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    const taskDocRef = doc(db, 'Tasks', taskId);

    const taskUpdate = {
      title: title,
      content: content,
      lastUpdatedAt: new Date().toISOString(), 
    };

    try {
      await updateDoc(taskDocRef, taskUpdate);
      return { taskId, ...taskUpdate }; 
    } catch (error) {
      console.error("Error updating document: ", error);
      throw new Error('Error updating task.');
    }
  } else {
    throw new Error('No user is signed in.');
  }
};
