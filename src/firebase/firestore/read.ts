import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import app from '../../../firebaseConfig';

const db = getFirestore(app);
const tasksCollection = collection(db, 'Tasks');

export async function fetchOnlyMyTodoList(uid: string) {
  const myTodosQuery = query(tasksCollection, where('ownerId', '==', uid));
  return await getDocs(myTodosQuery);
}
