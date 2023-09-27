import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Locadora de Carros",
	description: "Site criado para BRQ Challenge",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR">
			<body className={`${inter.className} relative`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
