import TodoList from '../components/TodoList'

export default function Container({todos}){
  const completed = todos.filter(todo => todo.completed)
  const incomplete = todos.filter(todo => !todo.completed)
  return (
    <>
    <TodoList todos={completed} type={'Completed'}/>
    <TodoList todos={incomplete} type={'Incomplete'}/>
    </>
  )
}