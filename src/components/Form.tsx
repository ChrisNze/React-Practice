import { FormEvent, useRef, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
	name: z.string().min(3, { message: "Name must be greater than 3 characters" }),
	age: z.number({ invalid_type_error: "Age field is required" }).min(18, { message: "Age  must be at least 18" }),
});
type FormData = z.infer<typeof schema>;

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormData>({ resolver: zodResolver(schema) });
	// console.log(errors);

	// const useName = useRef();
	// const [person, setPerson] = useState({
	// 	name: "",
	// 	age: "",
	// });

	// const changeName = (e: FormEvent) => {
	// 	setPerson({ ...person, name: e.target.value });
	// };
	// const changeValue = (e: FormEvent) => {
	// 	setPerson({ ...person, age: parseInt(e.target.value) });
	// };

	const onSubmit = (data: FieldValues) => {
		// event.preventDefault();
		console.log(data);
		// console.log(person);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label htmlFor="">Name</label>
			{/* <input type="text" value={person.name} onChange={(e) => setPerson({ ...person, name: e.target.value })} /> */}
			<input {...register("name")} type="text" />
			{errors.name && <p className="text-danger">{errors.name.message}</p>}
			{/* {errors.name?.type === "minLength" && <p className="text-danger">The input character must be greater than 3</p>} */}
			<br />
			<br />
			<label htmlFor="">Age</label>
			{/* <input type="number" value={person.age} onChange={(e) => setPerson({ ...person, age: e.target.value })} /> */}
			<input type="number" {...register("age", { valueAsNumber: true })} />
			{errors.age && <p className="text-danger">{errors.age.message}</p>}
			{/* {errors.name?.type === "maxLength" && <p className="text-danger">Invalid Age</p>} */}
			<br />
			<br />
			<button disabled={!isValid} type="submit">
				Submit
			</button>
		</form>
	);
};

export default Form;
