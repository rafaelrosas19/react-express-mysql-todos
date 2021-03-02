export default function TodoList({todos, type, toggleStatus, handleDelete}){
  const list = todos.map(todo => {
    const removeX = todo.completed ? 'X' : null
    return (
      <div>
        <div key={todo.id} onClick={() => toggleStatus(todo.id)}>{todo.name} </div><span onClick={handleDelete}>{removeX}</span>
      </div>
    )
  })
  return (
    <div>
    <h2>{type}</h2>
    {list}
    </div>
  )
}