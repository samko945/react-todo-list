import "./App.css";
import React from "react";
import TodoList from "./TodoList";

export default function App() {
	return (
		<div>
			<h1>Welcome!</h1>
			<TodoList name="Todo List" />
		</div>
	);
}
