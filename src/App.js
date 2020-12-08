//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import ToDos from './components/ToDos';
import UserInput from './components/userinput'
import Head from './components/head'

class App extends Component {
  state = {
    taskList: [
      {id: 1, task:'Jogar lixo fora'},
      {id: 2, task:'Agredir minha irmã mais nova'},
      {id: 3, task:'Colocar o dedo na tomada'},
      {id: 4, task:'Passar o nome do agiota pro pistolero'},
    ],
    mensagem: ''
  }

  handleDelete = (taskId) => {
    const newTaskList = this.state.taskList.filter (obj => obj.id !== taskId)
    this.setState({taskList: newTaskList})
  }

  handleComplete = (taskId) => {
    let incentivos = ['Dá-lhe!','Vamo que vamo!','Muito bom, vamos continuar assim!','É isso aí!','Que orgulho...']
    this.setState({mensagem: `Última tarefa realizada: ${this.state.taskList.find(obj => obj.id === taskId).task}. ${incentivos[Math.floor(Math.random() * incentivos.length)]}`})   //trecho para eu acessar a tarefa a partir do id dela.
    const newTaskList = this.state.taskList.filter (obj => obj.id !== taskId)
    this.setState({taskList: newTaskList})
    
  }

  handleAdd = (newToDo) => {
    if (newToDo !== ''){
      let newTaskList = [...this.state.taskList, {id: (Math.random().toFixed(2)*100), task: newToDo}]
      console.log('handleAdd log: ', newTaskList)
      this.setState({taskList: newTaskList})
    }else{
      this.setState({mensagem: 'Ei, você tentou colocar uma tarefa vazia! Faz isso não, meu rei.'})
    }
    
  }

  render(){
    return (
      <div className='main container'>
        <Head taskList={this.state.taskList} mensagem={this.state.mensagem} />
        <ToDos onComplete={this.handleComplete} onDelete={this.handleDelete} taskList={this.state.taskList} />
        <UserInput onAdd={this.handleAdd} />
      </div>
    )
  }
}

export default App;
