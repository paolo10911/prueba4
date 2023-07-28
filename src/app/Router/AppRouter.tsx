'use client'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Formulario } from '../Componentes/Formulario'
import { Componente1 } from '../Componentes/Componente1'
import { Funciones } from '../Componentes/Funciones'
import { Modelos } from '../Componentes/Modelos'
import { Registros } from '../Componentes/Mostrar'
import { Actualizar } from '../Componentes/Actualizar'


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={<Componente1/>}/>
        <Route path="/formulario" element={<Formulario/>}/>
        <Route path='/mostrar' element={<Registros/>}/>
        <Route path="/funciones" element={<Funciones/>}/>
        <Route path="/modelos" element={<Modelos/>}/>
        <Route path='/actualizar' element={<Actualizar/>}/>
    </Routes>
  )
}
