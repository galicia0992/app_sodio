import { getDatabase, ref, push } from "firebase/database"
import { FIREBASE_APP } from "../firebaseConfig"
const post = (alimento, cantidadSodio) =>{
    const db = getDatabase(FIREBASE_APP)
    push(ref(db, "/appDb/0"),{
        alimento,
        cantidadSodio,
        id: Date.now()
    })
    
}
export default post