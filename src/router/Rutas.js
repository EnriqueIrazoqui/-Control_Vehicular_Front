import React from 'react'
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom"
import { Inicio } from '../Componentes/Inicio'
import {IndexVehiculos} from '../Componentes/IndexVehiculos'
import { HeaderNav } from '../layout/HeaderNav'
import { IndexReportes } from '../Componentes/IndexReportes'
import { DatosVehiculo } from '../Componentes/DatosVehiculo'
import { NuevoVehiculo } from '../Componentes/NuevoVehiculo'

export const Rutas = () => {
  return (
    <BrowserRouter>
        <HeaderNav/>
        <Routes>
        <Route path="/" element={<Navigate to="/inicio" />}/>
          <Route path="/inicio" element={<Inicio/>}/>
          <Route path="/indexVehiculos" element={<IndexVehiculos/>}/>
          <Route path="/indexReportes" element={<IndexReportes/>}/>
          <Route path="/datosVehiculo" element={<DatosVehiculo/>}/>
          <Route path="/nuevoVehiculo" element={<NuevoVehiculo/>}/>
          <Route path='*' element={
          <div>
             <h1>Error 404</h1>
          </div>
          }/>
        </Routes>
    </BrowserRouter>
  )
}
