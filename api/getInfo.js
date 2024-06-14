import {getDatabase, ref, onValue} from 'firebase/database';
import { FIREBASE_APP } from '../firebaseConfig';

const getInfo = async (setGetInf) => {
  const db = getDatabase(FIREBASE_APP);
  const starCountRef = ref(db, `/appDb/0`);
  onValue(starCountRef, snapshot => {
    const data = snapshot.val();
    let arr = []
    Object.values(data).map(item => {
      arr.push(item);
    });
    setGetInf(arr);
  });
};
export default getInfo;