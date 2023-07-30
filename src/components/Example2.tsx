import { useState } from "react";

const Example2 = () => {
	const [game, setGame] = useState({
		id: 1,
		player: ["Chris"],
	});

	const handleName = () => {
		setGame({ ...game, player: [...game.player, "Bob"] });
	};
	return (
		<>
			<h1>{game.player[game.player.length - 1]}</h1>
			<button onClick={handleName}>Click</button>
		</>
	);
};

export default Example2;
