import {getDatabase, ref, push} from 'firebase/database';
import {FIREBASE_APP} from '../firebaseConfig';

const post = (alimento, cantidadSodio, fullDate) => {
  const db = getDatabase(FIREBASE_APP);
  push(ref(db, `/appDb/0/${fullDate}`), {
    alimento,
    cantidadSodio,
    fullDate,
    id: Date.now(),
  });
};
export default post;
