import Image from "next/image";
import CustomButton from "./CustomButton";

export default function Header() {
	return (
		<div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
			<div className="flex-1 pt-36 sm:px-16 px-6">
				<h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
					Ache, reserve e alugue um carro - rápido e fácil !
				</h1>
				<p className="text-[27px] text-black-100 font-light mt-5">
					Melhore sua experiência ao alugar um carro.
				</p>
				<CustomButton
					title="Procure por carros"
					containerStyles="hover:bg-red-400 bg-red-600 text-white rounded-full mt-10"
				/>
			</div>
			<div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
				<div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
					<Image
						src="/hero.png"
						alt="Hero"
						fill
						className="object-contain"
					/>
				</div>
				<div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-red-400 rounded-full bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden" />
			</div>
		</div>
	);
}
