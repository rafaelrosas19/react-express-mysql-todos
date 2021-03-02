import TodoList from '../components/TodoList'

export default function Container({todos, toggleStatus, handleDelete}){
  const completed = todos.filter(todo => todo.completed)
  const incomplete = todos.filter(todo => !todo.completed)
  return (
    <div>
    <TodoList todos={completed} type={'Completed'} toggleStatus={toggleStatus} handleDelete={handleDelete}/>
    <TodoList todos={incomplete} type={'Incomplete'} toggleStatus={toggleStatus}/>
    </div>
  )
}