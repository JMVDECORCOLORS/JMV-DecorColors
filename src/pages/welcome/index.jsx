import { useState } from 'react'
import { BrowserRouter, Routes, Route, useParams, Link, Navigate} from 'react-router-dom'
import './index.css'

import titleDetail from '../../assets/bgs/welcometitle.png'
import poredby from '../../assets/bgs/bgfooter.png'

function Welcome() {
  
  return (
    <div className="welcome" >
        <img className='titleFormDecor' src={titleDetail} alt="" />
        <div className='WelcomeMainContent'>
          <p>Eu sei que o Workshop tá animal,
            mas antes de continuarmos, 
            responde algumas perguntinhas
            pra gente?</p>
            <Link to="/Formulario-jmv-decor"><button>Bora!</button></Link>
            <Link to="/Formulario-jmv-decor"><button>Já nasci pronto!</button></Link>
          
        </div>
        <footer>
          <a href="https://www.arquelab.com.br/">
            <img src={poredby} alt="logoarquelab" />
          </a>
            
        </footer>
    </div>
  )
}

export default Welcome