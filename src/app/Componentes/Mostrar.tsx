import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Persona } from '../Interfaces'
import { obtenerPersonas } from '../FireBase/Promesas'


export const Registros = () => {
    const [personas, setPersonas] = useState<Persona[]>([])
    useEffect(()=>{
        obtenerPersonas().then((listado)=>{
            console.log("Ya estoy listo")
            console.log(listado)
            setPersonas(listado)
        })
       
    },[])

    const renderizarDatos = ()=>{
        var r = personas.map((p)=>{
            return <tr>
                    <td>{p.nombre}</td>
                    <td>{p.email}</td>
                    <td>{p.contrasenia}</td>
                    <td>{p.numero}</td>
                    <td>{p.cumpleanios}</td>
                    <td>{p.elegir}</td>
                    <td><Link to={"/Actualizar"}>Actualizar</Link></td>
                    <td><Link to={"/Eliminar"}>Eliminar</Link></td>
                </tr>
        })
        return r
    }

    return (
    <table>
        <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Contrasenia</th>
            <th>Numero</th>
            <th>Cumpleanios</th>
            <th>lenguaje</th>
        </tr>
        {
            renderizarDatos()
        }
    </table>
  )
}