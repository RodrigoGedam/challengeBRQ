"use client";

import { ShowMoreProps } from "@/types";
import CustomButton from "./CustomButton";

export default function ShowMore({
	pageNumber,
	isNext,
	setLimit,
}: ShowMoreProps) {
	const handleNavigation = () => {
		const newLimit = (pageNumber + 1) * 10;
		setLimit(newLimit);
	};

	return (
		<div className="w-full flex items-center justify-center gap-5 mt-10">
			{!isNext && (
				<CustomButton
					title="Mostrar Mais"
					containerStyles="bg-red-400 rounded-full text-white"
					handleClick={handleNavigation}
				/>
			)}
		</div>
	);
}
