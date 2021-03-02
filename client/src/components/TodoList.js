export default function TodoList({todos, type}){
  const list = todos.map(todo => <li key={todo.id}>{todo.name}</li>)
  return (
    <>
    <h2>{type}</h2>
    <u>{list}</u>
    </>
  )
}