import Card from './Card';

export default function Cards({characters, onClose}) {

      return (
      <div>
         {
            characters.map(({id,name, status,species,gender,origin, image}) => {
               return <Card 
               origin={origin.name}
                  key={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  image={image}
                  // origin={origin.name}
                  onClose={onClose}
                  // onClose={() => window.alert('Emulamos que se cierra la card')}
                  
               />
            })
         }
      </div>
      )
}
