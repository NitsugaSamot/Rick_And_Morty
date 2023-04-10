import { useState } from 'react';
import './stylesNav.css'

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div className='divSearch'>
         <input className='inputSearch' type='search' onChange={handleChange} value={id} />
         <button className='btnAgregar' onClick={() =>{onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}