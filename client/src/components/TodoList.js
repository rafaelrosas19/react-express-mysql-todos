export default function TodoList({todos, type, toggleStatus}){
  const list = todos.map(todo => {
    return (
      <div key={todo.id} onClick={() => toggleStatus(todo.id)}>{todo.name}</div>
    )
  })
  return (
    <div>
    <h2>{type}</h2>
    {list}
    </div>
  )
}