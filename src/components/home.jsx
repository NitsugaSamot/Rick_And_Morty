/*5️⃣ ***COMPONENTE HOME*** 5️⃣

Implementar el componente Home. Este deberá renderizar una lista de eventos (Cards) que contengan la 
información consumida directamente del estado global de Redux. 
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que conectar el componente con el estado global de Redux mediante dos funciones: mapStateToProps y 
mapDispatchToProps.

🟢 Tendrás que renderizar una serie de etiquetas HTML con información dentro.

🟢 Tendrás que mappear tu estado global para luego renderizar su información utilizando el componente <BandCard />.

IMPORTANTE
❗Este componente debe ser de clase.
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
*/

import './home.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getAllBands} from '../../redux/actions'
import {BandCard} from './../BandCard/BandCard'


export class Home extends Component {
   constructor(props) {
      super(props)
   }

   componentDidMount() {
      this.props.getAllBands()
   }

   render() {
      return (
         <div className='home'>
            <h1>Henry Palooza</h1>
            {
               this.props.bands.map(({id, name, image, functionDate})=>
                  // ● <Home /> › React LifeCycles › Debe pasar a cada componente <BandCard /> las propiedades: id, name, image y functionDate de cada banda
                  {
                  return(
                     
                     // React LifeCycles › Debe pasar a cada componente <BandCard /> las propiedades: id, name, image y functionDate de cada banda
                     <BandCard
                        key={id}
                        id={id}
                        name={name}
                        image={<img src={image} alt='henry-palooza-logo' />}
                        functionDate={functionDate}
                     />
                  )
               })
            }

         </div>
         );
   }
}

export const mapStateToProps = (state) => {
   return {
      bands: state.bands
   }
};

export const mapDispatchToProps = (dispatch) => {
   return{
      getAllBands: () => {dispatch(getAllBands())}
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
