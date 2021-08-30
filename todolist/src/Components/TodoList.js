import Todo from './Todo';

function TodoList ({todos, checkTodo, deleteTodo}) {
    return (
        <>
            {todos.map( todo => <Todo key={todo.id} todo={todo} checkTodo={checkTodo} deleteTodo={deleteTodo}/> )}
        </>
    )
}

export default TodoList;