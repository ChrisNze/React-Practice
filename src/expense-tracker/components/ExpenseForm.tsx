import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../categories";

const schema = z.object({
	description: z.string().min(3, { message: "Description must be greater than 3 characters" }).max(50),
	amount: z.number({ invalid_type_error: "Amount is required" }).min(0.01).max(100_000),
	category: z.enum(categories, {
		errorMap: () => ({ message: "Category is required" }),
	}),
});

interface Props {
	addValue: (data: ExpenseFormData) => void;
}

type ExpenseFormData = z.infer<typeof schema>;

const ExpenseForm = ({ addValue }: Props) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });
	return (
		<form
			action=""
			onSubmit={handleSubmit((data) => {
				addValue(data);
				reset();
			})}>
			<div className="mb-3">
				<label htmlFor="description" className="form-label">
					Description
				</label>
				<input {...register("description")} id="description" type="text" className="form-control" />
				{errors.description && <p className="text-danger">{errors.description.message}</p>}
			</div>
			<div className="mb-3">
				<label htmlFor="amount" className="form-label">
					Amount
				</label>
				<input {...register("amount", { valueAsNumber: true })} id="amount" type="number" className="form-control" />
				{errors.amount && <p className="text-danger">{errors.amount.message}</p>}
			</div>
			<div className="mb-3">
				<label htmlFor="category" className="form-label">
					Category
				</label>
				<select {...register("category")} className="form-select" id="category">
					<option value=""></option>
					{categories.map((category) => (
						<option key={category} value={category}>
							{category}
						</option>
					))}
				</select>
				{errors.category && <p className="text-danger">{errors.category.message}</p>}
				<button className="btn btn-primary mt-3 mb-3" type="submit">
					Submit
				</button>
			</div>
		</form>
	);
};

export default ExpenseForm;