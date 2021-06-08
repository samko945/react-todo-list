import React from "react";

export default function Form(props) {
	return (
		<form onSubmit={props.submitValue}>
			<input className="newTodoInput" type="text" value={props.value} onChange={props.updateValue} />
			<input type="submit" value="Create" />
		</form>
	);
}
