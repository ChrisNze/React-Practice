interface Props {
	count: number;
}

const Navbar = ({ count }: Props) => {
	return (
		<>
			<h1>Navbar: {count}</h1>
		</>
	);
};

export default Navbar;
