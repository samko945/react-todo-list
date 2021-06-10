import React from "react";

export default function TodoItem(props) {
	return (
		<li
			// Invokes/calls the deleteItem function only once its clicked.
			// Without the anonymous function, the deleteItem function gets called immedietly on render,
			// this is because passing the props.id parameter passed in paranthesis invokes the function
			onClick={() => {
				props.deleteItem(props.id);
			}}
		>
			{props.text}
		</li>
	);
}
