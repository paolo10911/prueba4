import { collection,addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from "@firebase/firestore";
import { Persona } from "../Interfaces";
import { db } from "./Conexion";


export const registrarPersona = async (p:Persona)=>{
    const docRef = await addDoc(collection(db, "personas"),p)
}

export const obtenerPersonas = async()=>{
    const querySnapshot = await getDocs(collection(db, "personas"));
    console.log("CHAOOO")
    console.log(querySnapshot)
    var personas:Persona[] = []
    querySnapshot.forEach((d)=>{
        console.log(d.id)
        console.log(d.data())
        var p:Persona = {
            nombre:d.data().nombre,
            email:d.data().email,
            contrasenia:d.data().contrasenia,
            numero:parseInt(d.data().numero),
            cumpleanios:d.data().cumpleanios,
            elegir:d.data().elegir,
            ID:d.id
        } 
        personas.push(p)
    })
    return personas
}
export const obtenerPersona = async(ID:string)=>{
    const docRef = doc(db, "personas", ID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const p:Persona = {
            nombre:docSnap.data().nombre,
            email:docSnap.data().email,
            contrasenia:docSnap.data().contrasenia,
            numero:docSnap.data().numero,
            cumpleanios:docSnap.data().cumpleanios,
            elegir:docSnap.data().elegir,
            ID:docSnap.id
        }
        return p
    } else {
        return undefined
    }
}
export const actualizarPersona = async(ID:string,p:Persona)=>{
    const docRef = doc(db, "personas",ID);
    await updateDoc(docRef, {...p});
}
export const eliminarPersona = async(ID:string)=>{
    await deleteDoc(doc(db, "personas", ID));
}