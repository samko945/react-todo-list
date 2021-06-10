import React, { useState } from "react";
import Form from "./Form";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
	const [newTodoInput, setNewTodoInput] = useState("");
	function updateNewTodoInput(event) {
		const newValue = event.target.value;
		setNewTodoInput(newValue);
	}

	const [listItems, setListItems] = useState([]);
	function submitNewTodo(event) {
		setListItems([...listItems, newTodoInput]);
		setNewTodoInput("");
		event.preventDefault();
		event.target.querySelector(".newTodoInput").focus();
	}
	return (
		<div>
			<h1>{props.name}</h1>
			<Form value={newTodoInput} updateValue={updateNewTodoInput} submitValue={submitNewTodo} />
			{listItems.map((item, index) => {
				return <TodoItem key={index} text={item} />;
			})}
		</div>
	);
}
