import React, { Component } from 'react';
import Logo from './images/lupus.png'

class Head extends Component {
    renderGreeting(){
        let tasks = this.props.taskList.length 
        return (tasks > 0 ? `Tarefas restantes: ${tasks}` : 'Parabéns, você não tem mais tarefas por hoje!')
    }

    render() { 
        console.log('head props:', this.props)
        //possivel logo: "https://webstockreview.net/images/feet-clipart-ankle-17.png"
        return (
            
            <div className="container head d-flex flex-column">
                <h1 className='mx-auto display-4'>Tarefas</h1>
                <img width='300px' className='mx-auto img-responsive center-block' src={Logo} alt= 'logo?'/>
                <h3 className='mx-auto'>{this.renderGreeting()}</h3>
                {this.props.mensagem !== '' && <p className='mx-auto'>{this.props.mensagem}</p>}
            
            </div>
        );
    }
}
 
export default Head;