import React from "react";

export default function Form(props) {
	return (
		<form>
			<input type="text" value={props.value} onChange={props.updateValue} />
			<input type="submit" value="Create" />
		</form>
	);
}
