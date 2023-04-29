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


// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
// const API_KEY = 'af71838ffb8f.61bab4b16bc6fb23c956';

const URL = 'http://localhost:3001/rickandmorty/login';

function App() {

const navigate = useNavigate()   
const [characters, setCharacters] = useState([]);
const [access, setAccess] = useState(false)


const login = async(userData) => {
   try {
      const { email, password } = userData;
      const { data } = await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;

      setAccess(access);
      access && navigate('/home');

   } catch (error) {
      console.log(error.message);
   }
}
useEffect(() => {
   !access && navigate('/')
}, [access])

const imprimeAlerta = document.createElement('P')
imprimeAlerta.textContent = 'Personaje añadido'

   const onSearch = async(id) => {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         
         if(data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         };

      } catch (error) {
         alert('¡No hay personajes con este ID!');
      }
   }

   const onClose = (id) => {
      
      console.log(id)
      const charactersFiltered = characters.filter(character => character.id !== id)
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
