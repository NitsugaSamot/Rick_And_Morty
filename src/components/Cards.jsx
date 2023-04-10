import Card from './Card';
import './Card.css';



export default function Cards({characters, onClose}) {

      return (
      <div className='card-container'>
         {
            characters.map(({id,name, status,species,gender,origin, image}) => {
               return <Card  className='card'
               origin={origin.name}
               image={image}
                  key={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
               
                  // origin={origin.name}
                  onClose={onClose}
                  // onClose={() => window.alert('Emulamos que se cierra la card')}
                  
               />
            })
         }
      </div>
      )
}
