import Image from "next/image";
import Link from "next/link";

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
				<Link
					href="/login"
					className="flex flex-row relative justify-center items-center py-3 px-6 outline-none text-black rounded-full bg-white min-w-[130px] hover:bg-gray-100"
				>
					Entrar
				</Link>
			</nav>
		</header>
	);
}
