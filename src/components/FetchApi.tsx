import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "./services/api-client";

interface User {
	id: number;
	name: string;
}

const FetchApi = () => {
	const [user, setUser] = useState<User[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	//To delete item from our server and also update the UI
	const deleItem = (id: number) => {
		const originalUser = [...user];
		setUser(user.filter((item) => item.id !== id));

		apiClient
			.delete(`/users/${id}`) //To update our serverS
			.catch((err) => {
				setError(err.message);
				setUser(originalUser);
			});
	};
	////////////////////////////////////////////////////////

	//To Add item to our server and also update the UI
	const addItem = () => {
		const originalUser = [...user];
		const newUser = {
			id: user.length + 1,
			name: "Chris",
		};
		setUser([...user, newUser]);
		apiClient
			.post("/users/", newUser)
			.then((res) => setUser([...user, res.data]))
			.catch((err) => {
				setError(err.message);
				setUser(originalUser);
			});
	};
	///////////////////////////////////////////////////
	console.log(user);
	useEffect(() => {
		// const fetchUsers = async () => {
		// 	try {
		// 		const res = await apiClient.get<User[]>("/users");
		// 		setUser(res.data);
		// 	} catch (err) {
		// 		setError((err as AxiosError).message);
		// 	}
		// };
		// fetchUsers();
		const controller = new AbortController(); //To cancel the HTTP request or any async request whenever the user navigates to anothe page
		// console.log(controller);
		setIsLoading(true);

		apiClient
			.get<User[]>("/users", { signal: controller.signal })
			.then((res) => {
				setTimeout(() => {
					setUser(res.data);
					setIsLoading(false);
				}, 2000);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return; //To cancel a request if user navigate to another page
				setTimeout(() => {
					setError(err.message);
					setIsLoading(false);
				}, 2000);
			});

		return () => controller.abort(); //To cancel a request if user navigate to another page
	}, []);

	//To add a button if the Api is resolved
	const addButton = () => {
		let add_button;
		if (error) {
			add_button = null;
		} else if (!isLoading) {
			add_button = (
				<button className="btn btn-primary mb-3" onClick={addItem}>
					Add
				</button>
			);
		}

		return add_button;
	};

	return (
		<>
			{error && (
				<p className="text-danger mt-5">
					{error === "Request failed with status code 404"
						? "Request Failed, Please try again"
						: "Network Error, Please check your internet connection"}
				</p>
			)}
			{isLoading && (
				<>
					<button className="btn btn-primary" type="button" disabled>
						<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
						Loading...
					</button>
					{/* <div className="spinner-grow text-primary mt-5"></div>
					<span>Fetching data.........</span> */}
				</>
			)}
			{addButton()}
			{/* {!isLoading && error ? (
				<button className="btn btn-primary mb-3" onClick={addItem}>
					Add
				</button>
			) : null} */}
			<ul className="mt-3 list-group">
				{user.map((item, index) => (
					<>
						<li key={item.id} className="list-group-item d-flex justify-content-between">
							{index + 1} {item.name}
							<button className="btn btn-outline-danger" onClick={() => deleItem(item.id)}>
								Delete
							</button>
						</li>
					</>
				))}
			</ul>
		</>
	);
};

export default FetchApi;
