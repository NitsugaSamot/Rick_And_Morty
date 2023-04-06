import {useState, useEffect} from 'react'//Los hooks son funciones que tiene react que nos brinda para facilitar el manejo de componentes funcionales. No existen los hooks para componentes de clase

//useEffect: Nos permite simuylar los ciclos de vida de nuestros componentes. Su primer paramtro es un callñback y su segundo un array

const Counter = () => {


    //el primero es el estado, el segundo es la funcion que le permite modificar el estado
    // const [saludo, setSaludo] = useState('Hola')
    
    // const [count, setCount] = useState({//Ejemplo de varios estados
    //     saludo: 'Hola',
    //     counter: 0
    // })

    let [count, setCount] = useState(0) //valor inicial del estado

    const handleClick = () => {
        setCount(count+1)
    }

    useEffect(() => {
        console.log('Se monto el componente funcional')

        return() => alert('Chau')/*lo que ponga aca va a ser el desmontaje del compnente*/
    }, [count])


  return (
    <div>

        <h1>Function Component</h1>
        <p>{count}</p>
        <button onClick={handleClick}>Aumentar</button>
    </div>
  )
}

export default Counter