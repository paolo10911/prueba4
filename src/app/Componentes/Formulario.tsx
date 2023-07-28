import React, { useEffect, useState } from 'react'
import "../assent/CSS/Estilos.css";
import { Persona } from '../Interfaces';
import { registrarPersona } from '../FireBase/Promesas';

export const Formulario = () => {
      const [nombre, setNombre] = useState("");
      const [email, setEmail] = useState("");
      const [contrasenia, setContrasenia] = useState("");
      const [numero, setNumero] = useState(0);
      const [cumpleanios, setCumpleanios] = useState("");
      const [elegir, setElegir] = useState("");
      const [errorNombre, setErrorNombre] = useState("")
      const registrar = ()=>{
        if(nombre.trim()==""){
          setErrorNombre("No valen espacios en blanco")
        }else{
          setNombre(nombre.trim())
        }

        //Asuman que se valido todo
        const p:Persona = {
          nombre,
          email,
          contrasenia,
          numero,
          cumpleanios,
          elegir
        }
        registrarPersona(p)
        console.log(nombre);
        alert("Bienvenido "+nombre);
      }
      const validarNombre = (valor:string)=>{
        setNombre(valor);
        if(valor.length<3){
          setErrorNombre("Debe tener mas de 3 letras")
        }
        else{
          setErrorNombre("")
        }
    
    
      }
    
  return (
    <form className='formulario'>
      <input type="text" className="nombre" value={nombre} placeholder="Diego" onChange={(e) =>validarNombre(e.target.value)}/><br/>
      <span>{errorNombre}</span><br/>
      <input type="email" className="email" placeholder="Diego@gmail.cl" onChange={(e) => setEmail(e.target.value)}/><br/>
      <input type="password" className="contrasenia" placeholder="contrasenia" onChange={(e) => setContrasenia(e.target.value)}/><br/>
      <input type="number" className="numero" placeholder="12345678" onChange={(e) => setNumero(parseInt(e.target.value))}/><br/>
      <input type="date" className="cumpleanios" onChange={(e) => setCumpleanios(e.target.value)}/><br/>
      <select name="select" className="selector" onChange={(e) => setElegir(e.target.value)}>
            <option value="Javascript">Javascript</option>
            <option value="Phyton">Phyton</option>
            <option value="Hhml">Html y css</option>
        </select><br/>
        <button type='button' onClick={registrar}>Enviar</button>
        <span className="contenedorBtnExtra"></span>
    </form>
  );
};

  
