interface Expense {
	id: number;
	description: string;
	amount: number;
	category: string;
}

interface Props {
	expense: Expense[];
	onDelete: (id: number) => void;
	sum: number;
}

const ExpenseList = ({ expense, onDelete, sum }: Props) => {
	if (expense.length === 0) {
		return null;
	}
	return (
		<table className="table table-bordered">
			<thead>
				<tr>
					<th>S/N</th>
					<th>Description</th>
					<th>Amount</th>
					<th>Category</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{expense.map((item, index) => (
					<tr key={item.id}>
						<td>{index + 1}</td>
						<td>{item.description}</td>
						<td>{item.amount}</td>
						<td>{item.category}</td>
						<td>
							<button className="btn btn-outline-danger" onClick={() => onDelete(item.id)}>
								Delete
							</button>
						</td>
					</tr>
				))}
			</tbody>

			<tfoot>
				<tr>
					<td>Total</td>
					<td></td>
					<td>${sum.toFixed(2)}</td>
					<td></td>
				</tr>
			</tfoot>
		</table>
	);
};

export default ExpenseList;
