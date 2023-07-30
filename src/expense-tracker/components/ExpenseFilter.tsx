import categories from "../categories";

interface Props {
	filterValue: (inputValue: string) => void;
}

const ExpenseFilter = ({ filterValue }: Props) => {
	return (
		<>
			<select className="form-select" onChange={(e) => filterValue(e.target.value)}>
				<option value="">All categories</option>
				{categories.map((category) => (
					<option key={category} value={category}>
						{category}
					</option>
				))}
			</select>
		</>
	);
};

export default ExpenseFilter;
