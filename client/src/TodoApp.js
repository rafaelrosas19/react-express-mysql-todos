import React, { useState } from 'react'
import './App.css';
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import Container from './components/Container'

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Go grocery shopping", completed: false },
    { id: 2, name: "Buy snacks", completed: true },
  ])

  return (
    <div className="container">
      <Header />
      <TodoForm />
      <Container todos={todos}/>
    </div>
  );
}


