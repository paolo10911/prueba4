'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { Componente1 } from './Componentes/Componente1'
import { Header } from './Componentes/Header'
import { Formulario } from './Componentes/Formulario'
import { AppRouter } from './Router/AppRouter'
import {BrowserRouter} from 'react-router-dom'
import { Redes } from './Componentes/Redes'

export default function Home() {
  return (
    <BrowserRouter>
      <Header/>
      <AppRouter/>
      <Redes/>
    </BrowserRouter>
  )
}
