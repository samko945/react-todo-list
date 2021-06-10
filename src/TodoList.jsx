import React, { useState } from "react";
import Form from "./Form";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
	const [listItems, setListItems] = useState([]);
	function submitNewTodo(newTodoValue) {
		setListItems([...listItems, newTodoValue]);
	}

	function deleteItem(id) {
		const newItems = listItems.filter((item, index) => {
			return index !== id;
		});
		setListItems(newItems);
	}

	return (
		<div className="container">
			<div className="heading">
				<h1>{props.name}</h1>
			</div>
			<Form submitValue={submitNewTodo} />
			{listItems.map((item, index) => {
				return <TodoItem key={index} id={index} text={item} deleteItem={deleteItem} />;
			})}
		</div>
	);
}
