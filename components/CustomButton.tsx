import { MouseEventHandler } from "react";

export default function CustomButton({
	title,
	containerStyles,
	handleClick,
}: {
	title: string;
	containerStyles: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
}) {
	return (
		<button
			type="button"
			className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles}`}
			onClick={handleClick}
		>
			<span className="flex-1">{title}</span>
		</button>
	);
}
