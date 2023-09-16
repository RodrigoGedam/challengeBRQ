import Image from "next/image";
import { useState } from "react";

export default function CustomFilter() {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="w-fit">
			<div className="relative w-fit">
				<button
					className="relative w-full min-w-[127px] flex justify-between items-center cursor-pointer rounded-lg bg-white py-2 px-3 text-left shadow-md sm:text-sm border"
					onClick={handleClick}
				>
					<span className="box truncate">Tipo</span>
					<Image
						src="/chevron-up-down.svg"
						width={20}
						height={20}
						className="ml-4 object-contain"
						alt="Chevron up down"
					/>
				</button>
				{isOpen && (
					<ul className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
						<li className="relative cursor-pointer select-none py-2 px-4 text-gray-900 hover:bg-slate-300">
							<span className="block truncate font-medium">
								Gasolina
							</span>
						</li>
						<li className="relative cursor-pointer select-none py-2 px-4 text-gray-900 hover:bg-slate-300">
							<span className="block truncate font-medium">
								Álcool
							</span>
						</li>
						<li className="relative cursor-pointer select-none py-2 px-4 text-gray-900 hover:bg-slate-300">
							<span className="block truncate font-medium">
								Elétrico
							</span>
						</li>
					</ul>
				)}
			</div>
		</div>
	);
}
