import React, { useState } from "react";
import Alert from "./Alert";
// import { MouseEvent } from "react";
interface Props {
	items: string[];
	heading: string;
	handleClick: () => void; //How to pass a function in typescript. If we pass a value in the function, then we write it like this handleClick: (item: dataType). The dataType is the type of the data passed in the function
}
const ListGroup = ({ items, heading, handleClick }: Props) => {
	const [selectedIndex, setSelectedIndex] = useState(-1);

	const [open, setOpen] = useState(false);

	const openAlert = () => {
		setOpen(!open);
	};

	return (
		<>
			<h1>{heading}</h1>
			{items.length === 0 ? (
				<p>Items is Empty</p>
			) : (
				<ul className="list-group">
					{items.map((items, index) => (
						<li
							key={index}
							className={`list-group-item ${index === selectedIndex ? "active" : null}`}
							onClick={() => {
								handleClick();
								setSelectedIndex(index);
							}}>
							{items}
						</li>
					))}
				</ul>
			)}
			{open ? <Alert openAlert={openAlert} open={open} /> : <p>Click to button below to open</p>}
			<button className="btn btn-primary" onClick={openAlert}>
				Button
			</button>
		</>
	);
};

export default ListGroup;
