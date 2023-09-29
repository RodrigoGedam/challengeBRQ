import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";

export default function Page() {
	return (
		<>
			<header className="overflow-hidden">
				<div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
					<div className="xl:flex-[1.5] flex justify-end items-end w-full">
						<div className="relative xl:w-full w-[90%] h-[420px] z-0">
							<Image
								src="/hero.png"
								alt="Hero"
								width={750}
								height={750}
								className="object-contain"
							/>
						</div>
					</div>
					<div className="flex-1 pt-36 sm:px-16 px-6">
						<h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold underline">
							Informações
						</h1>
					</div>
				</div>
			</header>
			<main className="m-4 sm:px-16 px-6 py-4 max-w-[1440px] mx-auto">
				<div className="flex flex-col bg-slate-100 gap-y-2.5 text-center text-black-100 my-4">
					<h1 className="text-4xl font-extrabold">
						Informações sobre o aluguel
					</h1>
				</div>
				<section className="flex flex-col justify-center items-center w-full text-xl">
					<div className="flex justify-around items-center my-2 w-[720px]">
						<div className="w-full flex flex-col justify-center items-center">
							<p className="font-bold text-2xl">Marca</p>
							<p className="bg-slate-200 border border-solid border-black w-1/2 rounded text-center">
								Marca
							</p>
						</div>
						<div className="w-full flex flex-col justify-center items-center">
							<p className="font-bold text-2xl">Modelo</p>
							<p className="bg-slate-200 border border-solid border-black w-1/2 rounded text-center">
								Modelo
							</p>
						</div>
					</div>
					<div className="flex justify-around items-center my-2 w-[720px]">
						<div className="w-full flex flex-col justify-center items-center">
							<p className="font-bold text-2xl">Data Aluguel</p>
							<p className="bg-slate-200 border border-solid border-black w-1/2 rounded text-center">
								00/00/0000
							</p>
						</div>
						<div className="w-full flex flex-col justify-center items-center">
							<p className="font-bold text-2xl">Data Devolução</p>
							<p className="bg-slate-200 border border-solid border-black w-1/2 rounded text-center">
								00/00/0000
							</p>
						</div>
					</div>
					<button className="rounded-lg bg-indigo-400 px-2 p-1">
						Botao
					</button>
				</section>
				<section className="flex justify-center items-center text-center">
					<h2>Plano de fidelidade</h2>
				</section>
			</main>
			<Footer />
		</>
	);
}
