import React, { Component } from 'react'

class Life extends Component {

    //----------------------------------------------------
    // Steps Lifecycles...
    //----------------------------------------------------

    // 1. get default props...

    // 2. set default state...
    state = {
        title: 'Life Cycles'
    }

    // 3. before render jxs...
    componentWillMount(){
        console.log('3. before render jxs')

        // vai dar erro... pois o componente <h3> ainda nao foi renderizado....
        //document.querySelector('h3').style.color = 'red'
    }


    // 4. render jxs...
    render(){

        console.log('4. render jxs')

        return (
            <div>
                <h3>{this.state.title}</h3>
                <div onClick={()=> this.setState({title:'Outro título!!!'})}>Click to change</div>
            </div>
        )          
    }

    // 5. after render jxs...
    componentDidMount(){

        console.log('5. after render jxs')

        // ok!!! nao ira dar erro, pois o componente ja foi renderizado...
        document.querySelector('h3').style.color = 'red'
    }

    // 6. verifica se o componente ira sofrer atualizacao...
    componentWillUpdate(){
        console.log('6. before update')
    }

    // 7. verifica se o componente sofreu atualizacao...
    componentDidUpdate(){
        console.log('7. after update')
    }

    // 8. este metodo sera chamado o componente for ser removido do DOM...
    componentWillUnmount(){
        console.log('8. remocao do componente do DOM')    
    }    

}

export default Life
