'use client'
import { Link } from 'react-router-dom'
import React from 'react'
import "../assent/CSS/Estilos.css";

export const Header = () => {
  return (
    <nav className='navegador'>
      <Link to={"/"}>Home   </Link>
      <Link to={"/Formulario"}>Formulario </Link>
      <Link to={"/Funciones"}>Ayuda   </Link>
      <Link to={"/Modelos"}>Modelos   </Link>
      <Link to={"/Mostrar"}>Registros</Link>
    </nav>
  )
}
