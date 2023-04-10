import {Link} from 'react-router-dom'

export default function Card({id, name, species, gender, onClose, image, status,origin}) {
   return (
      <div className="containerCards">
         <div className='card' key={id}>
               <div className="headerCard">
                     <Link className='nameTitle' to={`/detail/${id}`}>
                        <h2 >{name}</h2>
                     </Link>
                     <button className='onClose' onClick={()=>onClose}>x</button>
               </div>
               
               <img className='imgCharacter' src={image} alt='' />


               <h2 className='caracteristica'>{species}</h2>
               <h2 className='caracteristica'>{gender}</h2>
               <h2 className='caracteristica'>{status}</h2>
               <h2 className='caracteristica'>{origin}</h2>
         
         </div>
      </div>

   ); 
}
