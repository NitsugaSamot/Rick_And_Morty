// af71838ffb8f.61bab4b16bc6fb23c956

import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate} from 'react-router-dom';
import  Form  from './components/Form';
import Header from './components/header-footer/Header';
import Footer from './components/header-footer/Footer';
import Favorites from './components/Favorites';


const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = 'af71838ffb8f.61bab4b16bc6fb23c956';

function App() {

const navigate = useNavigate()   
const [characters, setCharacters] = useState([]);
const [access, setAccess] = useState(false)

const username = 'tomas@tomas.com'
const password = 'cielo123'

const login = (userData) => {
  if( userData.username === username && userData.password === password){
   setAccess(true)
   navigate('/home')
  }
}

   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(charactersFiltered)
   }

   return (
      <div className='App'>
         <Header/>
         <Nav onSearch={onSearch} />

         <Routes>
         <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose}/> }/>
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
            <Route path='/favorites' element={<Favorites/>} />
         </Routes>

         <Footer/>
        
      </div>
   );
}

export default App;
