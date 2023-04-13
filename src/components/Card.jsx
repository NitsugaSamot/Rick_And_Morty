import {Link} from 'react-router-dom'
import { addFavorite, deleteFavorite } from '../redux/actions';
import{ connect }from 'react-redux'
import {useState, useEffect} from 'react'

 function Card({id, name, species, gender, onClose, image, deleteFavorite, myFavorites}) {

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         deleteFavorite(id)
      }
      else{
         setIsFav(true)
         addFavorite({id,name,species,gender,image})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if(fav.id === id) {
            setIsFav(true)
         }
      })
   }, [myFavorites])

   return (

      <div className="containerCard">
            <div className='card' key={id}>

               

               <div className="headerCard">
                     <Link className='nameTitle' to={`/detail/${id}`}>
                        <h2 >{name}</h2>
                     </Link>
                     <button className= 'heart' onClick={handleFavorite}>{isFav ?'❤️' :'🤍'  }</button>
                     <button className='onClose' onClick={()=>onClose}>x</button>
               </div>
               
               <img className='imgCharacter' src={image} alt='' />
               <h2 className='caracteristica'>Specie: {species}</h2>
               <h2 className='caracteristica'>Gender: {gender}</h2>
         
         </div>
      </div>



   ); 
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

 const mapDispatchToProps = (dispatch) => {
      return {
         addFavorite: (character) => {dispatch(addFavorite(character))},
         deleteFavorite: (id) => {dispatch(deleteFavorite(id))}
      }
 }


export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card)