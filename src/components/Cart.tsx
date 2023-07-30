interface Props {
	count: string[];
	onClear: () => void;
}

const Cart = ({ count, onClear }: Props) => {
	return (
		<>
			<ul>
				{count.map((items, index) => (
					<li key={index} onClick={onClear}>
						{items}
					</li>
				))}
			</ul>
			<button>Clear</button>
		</>
	);
};

export default Cart;
