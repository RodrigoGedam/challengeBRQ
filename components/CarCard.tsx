"use client";

import { CarProps } from "@/types";
import { calculateCarRent } from "@/utils";
import Image from "next/image";

interface CarCardProps {
	car: CarProps;
}

export default function CarCard({ car }: CarCardProps) {
	const { city_mpg, year, make, model, transmission, drive } = car;

	const carRent = calculateCarRent(city_mpg, year);

	return (
		<div className="flex flex-col p-6 justify-center items-start text-black-100 bg-red-100 hover:bg-white hover:shadow-md rounded-3xl">
			<div className="w-full flex justify-between items-start gap-2">
				<h2 className="text-[22px] leading-[26px] font-bold capitalize">
					{make} {model}
				</h2>
			</div>
			<p className="flex mt-6 text-[32px] font-extrabold">
				<span className="self-start text-[14px] font-semibold">R$</span>
				{carRent}
				<span className="self-end text-[14px] font-medium">/dia</span>
			</p>
			<div className="relative w-full h-40 my-3 mt-auto object-contain">
				<Image
					src="/hero.png"
					alt="Modelo do Carro"
					fill
					priority
					className="object-contain"
				/>
			</div>
			<div className="relative flex w-full mt-auto">
				<div className="flex group-hover:invisible w-full justify-center items-center text-gray-400">
					<div className="flex flex-col justify-center items-center gap-2">
						<Image
							src="/steering-wheel.svg"
							width={20}
							height={20}
							alt="Volante"
						/>
						<p className="text-[14px]">
							{transmission === "a" ? "Automatico" : "Manual"}
						</p>
					</div>
				</div>
				<div className="flex group-hover:invisible w-full justify-center items-center text-gray-400">
					<div className="flex flex-col justify-center items-center gap-2">
						<Image
							src="/tire.svg"
							width={20}
							height={20}
							alt="Pneu"
						/>
						<p className="text-[14px]">{drive.toUpperCase()}</p>
					</div>
				</div>
				<div className="flex group-hover:invisible w-full justify-center items-center text-gray-400">
					<div className="flex flex-col justify-center items-center gap-2">
						<Image
							src="/gas.svg"
							width={20}
							height={20}
							alt="Gasolina"
						/>
						<p className="text-[14px]">{city_mpg} MPG</p>
					</div>
				</div>
			</div>
		</div>
	);
}
