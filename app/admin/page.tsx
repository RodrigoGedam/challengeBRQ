"use client";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { useState } from "react";

export default function Page() {
	const [carros, setCarros] = useState([
		{
			fabricante: 1,
			modelo: 2,
			ano: 3,
			combustivel: 4,
			preco: 5,
		},
		{
			fabricante: 11,
			modelo: 21,
			ano: 31,
			combustivel: 41,
			preco: 51,
		},
		{
			fabricante: 12,
			modelo: 22,
			ano: 32,
			combustivel: 42,
			preco: 52,
		},
		{
			fabricante: 13,
			modelo: 23,
			ano: 33,
			combustivel: 43,
			preco: 53,
		},
		{
			fabricante: 14,
			modelo: 24,
			ano: 34,
			combustivel: 44,
			preco: 54,
		},
	]);

	const handleClick = () => {
		setCarros([
			...carros,
			{ fabricante: 14, modelo: 24, ano: 34, combustivel: 44, preco: 54 },
		]);
	};

	return (
		<main className="flex flex-col items-center justify-center">
			<h1 className="text-center m-4 text-4xl">Controle de Carros</h1>
			<div>
				<Table className="border-2 border-solid border-black p-4">
					<TableHeader>
						<TableRow>
							<TableHead className="w-[100px] text-bold text-base">
								Fabricante
							</TableHead>
							<TableHead className="text-bold text-base">
								Modelo
							</TableHead>
							<TableHead className="text-bold text-base">
								Ano
							</TableHead>
							<TableHead className="text-bold text-base">
								Combustivel
							</TableHead>
							<TableHead className="text-right text-bold text-base">
								Preço
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{carros.map((carro) => (
							<TableRow
								key={carro.modelo}
								className="bg-slate-200 border border-solid border-black text-center"
							>
								<TableCell className="font-medium">
									{carro.fabricante}
								</TableCell>
								<TableCell className="font-medium">
									{carro.modelo}
								</TableCell>
								<TableCell>{carro.ano}</TableCell>
								<TableCell>{carro.combustivel}</TableCell>
								<TableCell className="text-right">
									R$ {carro.preco} /dia
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
			<button
				type="button"
				className="mt-2 rounded-md bg-blue-300 border border-solid border-black px-2 font-semibold"
				onClick={handleClick}
			>
				Adicionar
			</button>
		</main>
	);
}
