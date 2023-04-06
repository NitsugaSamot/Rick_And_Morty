import React from 'react'

// export const Contador = () => {
//   return (
//     <div>Contador</div>
//   )
// }

class Contador extends React.Component{
    constructor(props) {
        super(props)

        this.state = {//este state no puede tener otro nombre y siempre va a ser un objeto
            counter: 0,
            saludo: 'Holas'
        }
    }

    clickSate = () => {
        this.setState({counter: this.state.counter + 1, saludo: 'me actualicé'},() => {
            
        console.log(this.state.counter)
        })
    }

    componentDidMount() {
        console.log('se monto el componente')
    }

    componentDidUpdate(){
        console.log(`me actualize, el estado ahora es: ${this.state.counter}`)
    }

    componentWillUnmount(){
        console.log('me desmonto')
    }

    render() {
        return(
            <div>
                <h1>Class Component</h1>
                <h3>{this.state.saludo}</h3>
                <p>{this.state.counter}</p>
                <button onClick={this.clickSate}>Aumentar State</button>
            </div>
        )
    }
}

export default Contador