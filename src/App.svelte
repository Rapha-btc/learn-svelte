<script>
	import TodoList from './lib/TodoList.svelte';
	import { v4 as uuid } from 'uuid';

	let todos = [
		{
			id: uuid(),
			title: 'Todo 1',
			complete: true
		},
		{
			id: uuid(),
			title: 'Todo 2',
			complete: true
		},
		{
			id: uuid(),
			title: 'Todo 3',
			complete: true
		}
	];
	$: console.log(todos);

	function handleAddTodo(event) {
		// event.preventDefault();
		todos = [
			...todos,
			{
				id: uuid(),
				title: event.detail.title,
				complete: false
			}
		];
	}

	function handleRemoveTodo(event) {
		todos = todos.filter((todo) => todo.id !== event.detail.id);
	}

	function handleToggleTodo(event) {
		todos = todos.map((todo) => {
			if (todo.id === event.detail.id) {
				return {
					...todo,
					complete: event.detail.value
				};
			}
			return { ...todo };
		});
	}
</script>

<h2>{todos.length} todositos</h2>
<TodoList
	{todos}
	on:addtodo={handleAddTodo}
	on:removetodo={handleRemoveTodo}
	on:toggletodo={handleToggleTodo}
/>

<style>
</style>
