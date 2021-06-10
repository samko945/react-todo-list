import React from "react";

export default function Form(props) {
	return (
		<form onSubmit={props.submitValue} className="form">
			<input className="newTodoInput" type="text" value={props.value} onChange={props.updateValue} />
			<button type="submit">
				<span>Add</span>
			</button>
		</form>
	);
}
