// import Example from "./components/Example";
// import ListGroup from "./components/ListGroup";

import { useEffect, useState } from "react";
// import Cart from "./components/Cart";
// import Navbar from "./components/Navbar";
// import Example2 from "./components/Example2";
// import Expandable from "./components/Expandable";
// import Form from "./components/Form";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseList from "./expense-tracker/components/ExpenseList";

import categories from "./expense-tracker/categories";
import FetchApi from "./components/FetchApi";

const App = () => {
	// let item = ["Home", "Contact Us", "About Us"];

	// const handleClick = () => {
	// 	console.log("item");
	// };
	// const [count, setCount] = useState(["Product 1", "Product 2"]);

	// const changeValue = () => {
	// 	let newArr = count.filter((item, index) => {
	// 		return index;
	// 	});
	// 	setCount(newArr);
	// };
	const [categoryValue, setCategoryValue] = useState("");
	const [expense, setExpense] = useState([
		{
			id: 1,
			description: "aaa",
			amount: 10,
			category: "Groceries",
		},
		{
			id: 2,
			description: "bbb",
			amount: 10,
			category: "Utilities",
		},
		{
			id: 3,
			description: "ccc",
			amount: 10,
			category: "Entertainment",
		},
		{
			id: 4,
			description: "ddd",
			amount: 10.6456,
			category: "Utilities",
		},
	]);

	const deleteItem = (id: number) => {
		setExpense(expense.filter((e) => e.id !== id));
	};

	const visibleExpenses = categoryValue ? expense.filter((cur) => cur.category === categoryValue) : expense;

	// let sum = 0;
	// expense.forEach((item) => {
	// 	sum = item.amount + sum;
	// });

	const sum2 = visibleExpenses.reduce((acc, visibleExpenses) => visibleExpenses.amount + acc, 0);

	useEffect(() => {
		document.title = "My App";
	}, [expense]);

	return (
		<div style={{ width: "60%", margin: "auto" }}>
			{/* <ListGroup items={item} heading="Cities" handleClick={handleClick} />
			<Example /> */}
			{/* <Navbar count={count.length} />
			<Cart count={count} onClear={changeValue} />
			<Example2 />
			<Expandable maxChars={100}>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum odit consectetur maxime quis eum velit nobis quia, id laborum repellendus
				exercitationem mollitia laboriosam at consequuntur, vero quasi quidem consequatur distinctio eligendi? Nam magnam veritatis voluptate
				distinctio in amet eveniet ipsam sunt, reiciendis eos qui, totam rem? Porro ad neque quia necessitatibus quod harum repellat magnam alias
				ratione maxime voluptatum hic, modi rerum, corrupti at pariatur libero eius quibusdam obcaecati qui tempore corporis sunt voluptatibus
				fuga. Dolorum eveniet, aliquid ea error nobis dignissimos excepturi voluptate culpa earum minus aperiam adipisci atque quo optio
				recusandae velit, voluptas accusantium blanditiis id iure ex!
			</Expandable> */}

			{/* <Form /> */}
			<FetchApi />

			<div className="mb-3 mt-3" style={{ width: "50%", margin: "auto" }}>
				<ExpenseForm addValue={(data) => setExpense([...expense, { ...data, id: expense.length + 1 }])} />
				<ExpenseFilter filterValue={(val) => setCategoryValue(val)} />
			</div>

			<ExpenseList expense={visibleExpenses} onDelete={deleteItem} sum={sum2} />
		</div>
	);
};

export default App;
