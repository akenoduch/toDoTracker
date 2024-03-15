import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import app from '../../../firebaseConfig';

interface CompleteTaskData {
  taskId: string;
  isCompleted: boolean;
}

export const completeTask = async ({ taskId, isCompleted }: CompleteTaskData) => {
  const db = getFirestore(app);
  const taskDocRef = doc(db, 'Tasks', taskId);

  try {
    await updateDoc(taskDocRef, { isCompleted });
  } catch (error) {
    console.error("Error updating document: ", error);
    throw new Error('Error updating task.');
  }
};
