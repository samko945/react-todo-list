import React, { useState } from "react";

export default function Form(props) {
	const [newTodoValue, setNewTodoValue] = useState("");
	function updateNewTodoValue(event) {
		const newValue = event.target.value;
		setNewTodoValue(newValue);
	}
	return (
		<div className="form">
			<input className="newTodoInput" type="text" value={newTodoValue} onChange={updateNewTodoValue} />
			<button
				onClick={() => {
					props.submitValue(newTodoValue, setNewTodoValue);
				}}
				type="submit"
			>
				<span>Add</span>
			</button>
		</div>
	);
}
