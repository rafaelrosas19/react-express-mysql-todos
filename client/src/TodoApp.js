import logo from './logo.svg';
import './App.css';

export default function TodoApp() {
  return (
    <div className="container">
      <Header message="Todo List"/>
      <TodoForm />
      <TodoList />
    </div>
  );
}


