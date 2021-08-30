import { useState, useRef, useEffect } from 'react';
import TodoList from './Components/TodoList'
import { v4 as uuidv4 } from 'uuid'

function App() {
	const [todos, setTodos] = useState([])
	const todoNameRef = useRef()

	function handleAddTodo() {
		const name = todoNameRef.current.value
		if(name === '') return
		setTodos(prevTodos => {
			return [...prevTodos, {id: uuidv4(), name: name, completed: false}]
		})
		todoNameRef.current.value = null
	}

	function handleRemoveCompletedTodos() {
		setTodos(prevTodos => {
			return prevTodos.filter(todo => todo.completed === false)
		})
	}

	function handleDeleteTodo(id) {
		setTodos(prevTodo => {
			return prevTodo.filter(todo => todo.id !== id)
		})
	}

	function checkTodo(id) {
		const newTodos = [...todos]
		const todo = newTodos.find(todo => todo.id === id)
		todo.completed = !todo.completed
		setTodos(newTodos)
	}

	useEffect(() => {
		const newTodos = JSON.parse(localStorage.getItem('todos'))
		setTodos(newTodos)
	}, [])

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

  	return (
		<div>
			<TodoList todos = {todos} checkTodo={checkTodo} deleteTodo={handleDeleteTodo}/>
			<br />
			<input ref={todoNameRef} type="text" />
			<button onClick={handleAddTodo}>Add Todo</button>
			<br />
			<br />
			<button onClick={handleRemoveCompletedTodos}>Clear All Completed Todos</button>
			<p>{todos.filter(todo => todo.completed === false).length} todo remaining</p>
		</div>
  	)
}

export default App;
