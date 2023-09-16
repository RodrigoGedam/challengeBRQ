import Image from "next/image";

export default function CustomFilter() {
	return (
		<div className="w-fit">
			<div className="relative w-fit">
				<button className="relative w-full min-w-[127px] flex justify-between items-center cursor-default rounded-lg bg-white py-2 px-3 text-left shadow-md sm:text-sm border">
					<span className="box truncate">titulo</span>
					<Image
						src="/chevron-up-down.svg"
						width={20}
						height={20}
						className="ml-4 object-contain"
						alt="Chevron up down"
					/>
				</button>
				<ul className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
					<li className="relative cursor-default select-none py-2 px-4 text-gray-900">
						<span className="block truncate font-medium">1</span>
					</li>
					<li className="relative cursor-default select-none py-2 px-4 text-gray-900">
						<span className="block truncate font-medium">2</span>
					</li>
					<li className="relative cursor-default select-none py-2 px-4 text-gray-900">
						<span className="block truncate font-medium">3</span>
					</li>
				</ul>
			</div>
		</div>
	);
}
