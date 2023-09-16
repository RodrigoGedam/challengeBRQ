import Image from "next/image";
import CustomButton from "./CustomButton";

export default function Navbar() {
	return (
		<header className="w-full absolute z-10">
			<nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
				<div className="flex justify-center items-center cursor-pointer">
					<Image
						src="/logo.svg"
						alt="Logo"
						width={118}
						height={18}
						className="object-contain"
					/>
				</div>
				<CustomButton
					title="Entrar"
					containerStyles="text-black rounded-full bg-white min-w-[130px] hover:bg-gray-100"
				/>
			</nav>
		</header>
	);
}
