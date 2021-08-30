function Todo({ todo, checkTodo, deleteTodo }) {
    function handleCheck() {
        checkTodo(todo.id)
    }

    function handleDelete() {
        deleteTodo(todo.id)
    }

    return (
        <div>
            <input type='checkbox' checked={todo.completed} onChange={handleCheck}/>
            {todo.name + " "}
            <button onClick={handleDelete}>Remove Todo</button>
        </div>
    )
}

export default Todo;