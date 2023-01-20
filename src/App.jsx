import { useState } from 'react'
import { BrowserRouter, Routes, Route, useParams, Link, Navigate} from 'react-router-dom'


import Welcome from './pages/welcome'
import FormJMVDecor from './pages/forms'
import Obrigado from './pages/thanks'

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="Formulario-jmv-decor" element={<FormJMVDecor/>}/>   
        <Route path="Obrigado" element={<Obrigado/>}/>
      </Routes>


      </BrowserRouter>
    </div>
  )
}

export default App
