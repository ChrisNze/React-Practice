// import { ReactNode } from "react";

interface Props {
	// children: ReactNode; //To pass html as props
	open: boolean;
	openAlert: () => void;
}
const Alert = ({ openAlert, open }: Props) => {
	return (
		<>
			<p className="alert alert-primary alert-dismissible">
				Alert
				<span className="btn-close" onClick={openAlert}></span>
			</p>
		</>
	);
};

export default Alert;
