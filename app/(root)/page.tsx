"use client";

import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import ShowMore from "@/components/ShowMore";
import { CarState } from "@/types";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
	const [carros, setCarros] = useState<CarState>([]);
	const [loading, setLoading] = useState(false);

	const [limit, setLimit] = useState(8);

	const getCars = async () => {
		setLoading(true);

		try {
			const result = await fetchCars({
				manufacturer: "",
				year: 2023,
				fuel: "",
				limit: limit || 8,
				model: "",
			});

			setCarros(result);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getCars();
	}, [limit]);

	return (
		<main className="overflow-hidden">
			<Header />
			<div
				className="mt-12 sm:px-16 px-6 py-4 max-w-[1440px] mx-auto"
				id="discover"
			>
				<div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
					<h1 className="text-4xl font-extrabold">
						Catálogo de carros
					</h1>
					<p>Explore os carros que você gostar</p>
				</div>
				<div className="mt-12 w-full flex justify-between items-center flex-wrap gap-5">
					<SearchBar />
					<div className="flex justify-start flex-wrap items-center gap-2">
						<CustomFilter />
					</div>
				</div>
				{carros.length > 0 ? (
					<section>
						<div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
							{carros?.map((carro) => (
								<CarCard key={carro.model} car={carro} />
							))}
						</div>
						{loading && (
							<div className="mt-16 w-full flex items-center justify-center">
								<Image
									src="/loader.svg"
									alt="Loader"
									width={50}
									height={50}
									className="object-contain"
								/>
							</div>
						)}
						<ShowMore
							pageNumber={limit / 8}
							isNext={limit > carros.length}
							setLimit={setLimit}
						/>
					</section>
				) : (
					!loading && (
						<div>
							<h2 className="mt-16 flex justify-center items-center flex-col gap-2">
								Sem Resultados
							</h2>
							<p>{carros?.message}</p>
						</div>
					)
				)}
			</div>
		</main>
	);
}
