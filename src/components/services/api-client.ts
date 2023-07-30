import axios, { CanceledError } from "axios";

export default axios.create({
	baseURL: "https://jsonplaceholder.typicode.com", //We used only this part to make the Api url reuseable. In case we wish to view the post in the Api, we can still use it. In this demo, we are viewing only the users in the Api
});

export { CanceledError };
