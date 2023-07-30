import React, { useState } from "react";
import { produce, produceWithPatches } from "immer";

const Example = () => {
	const [items, setItems] = useState([
		{
			id: 1,
			name: "Chris",
			lastName: "Nze",
			age: 28,
			religion: "Christianity",
		},
		{
			id: 2,
			name: "Chris",
			lastName: "Nze",
			age: 28,
			religion: "Christianity",
		},
	]);

	const changeValue = () => {
		setItems(
			produce((draft) => {
				const bug = draft.find((bug) => bug.id === 1);

				if (bug) {
					bug.lastName = "Chukwu";
				}
			})
		);
		// console.log(items);

		// const newArr = items.map((item) => {
		// 	return item.id === 1 ? { ...item, lastName: "Chukwuemeka" } : item;
		// });
		// setItems(newArr);
		// console.log(newArr);
	};

	return (
		<>
			<h1>
				{items[0].name} {""}
				{items[0].lastName} {""}
				{items[1].age} {""} {items[0].religion}
			</h1>

			<button onClick={changeValue}>Click me</button>
		</>
	);
};

export default Example;
