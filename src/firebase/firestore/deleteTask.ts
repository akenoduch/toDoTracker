import { getFirestore, doc, deleteDoc } from 'firebase/firestore';
import app from '../../../firebaseConfig';

const db = getFirestore(app);

export async function deleteTask(docId: string) {
  const taskDocRef = doc(db, 'Tasks', docId);
  try {
    await deleteDoc(taskDocRef);
  } catch (error) {
    console.error("Error deleting document: ", error);
    throw new Error('Error deleting task.');
  }
}