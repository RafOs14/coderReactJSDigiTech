import { query, where, collection, getDocs, orderBy } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import db from "../utils/firebase";


//Mostramos todos los productos de la coleccion
export const getFirestoreData = async (idCategory) => {
    let sql;
    if (idCategory) {
        sql = query(collection(db, "products"), where('idCategory', '==', idCategory));
    } else {
        sql = query(collection(db, "products"), orderBy('price', 'asc'));
    }
    const querySnapshot = await getDocs(sql);
    const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    return data;
}


//Mostramos un producto en especifico a traves de su id
export const getFirestoreDataById = async (idItem) => {
    const item = doc(db, "products", idItem);
    const docSnap = await getDoc(item);

    if (docSnap.exists()) {
        return {
            id: idItem,
            ...docSnap.data()
        }
    }else{
        console.log("No available data");
    }
}
