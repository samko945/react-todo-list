import "./App.css";
import React from "react";
import TodoList from "./TodoList";

export default function App() {
	return (
		<div>
			<div className="heading">
				<h1>Welcome!</h1>
			</div>
			<TodoList name="Todo List" />
		</div>
	);
}
