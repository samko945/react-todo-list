import React, { useState } from "react";
import Form from "./Form";

export default function TodoList(props) {
	const [newTodoInput, setNewTodoInput] = useState("");
	function updateNewTodoInput(event) {
		const newValue = event.target.value;
		setNewTodoInput(newValue);
	}
	return (
		<div>
			<h1>{props.name}</h1>
			<Form value={newTodoInput} updateValue={updateNewTodoInput} />
		</div>
	);
}
