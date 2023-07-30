import { useState } from "react";

interface Props {
	children: string;
	maxChars: number;
}

const Expandable = ({ children, maxChars }: Props) => {
	const [expand, setExpand] = useState(true);
	if (children.length <= maxChars) {
		return <p>{children}</p>;
	}
	const text = expand ? children.substring(0, maxChars) : children;
	return (
		<p>
			{text}...
			<button className="btn btn-secondary" onClick={() => setExpand(!expand)}>
				{expand ? "More" : "Less"}
			</button>
		</p>
	);
};

export default Expandable;
