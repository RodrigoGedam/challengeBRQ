import Link from "next/link";

export default function Page() {
	return (
		<div className="flex justify-center items-center h-screen w-full bg-slate-600">
			<form className="max-w-[400px] w-full p-6 bg-gray-900 rounded-lg">
				<h2 className="text-4xl text-white font-bold text-center">
					ENTRAR
				</h2>
				<div className="flex flex-col text-gray-400 py-2">
					<label>Email :</label>
					<input
						className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-red-400 focus:bg-gray-800 focus:outline-none"
						type="email"
					/>
				</div>
				<div className="flex flex-col text-gray-400 py-2">
					<label>Senha :</label>
					<input
						className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-red-400 focus:bg-gray-800 focus:outline-none"
						type="password"
					/>
				</div>
				<div className="flex justify-between text-gray-400 py-2">
					<p className="flex items-center">
						<input className="mr-2" type="checkbox" />
						Lembrar
					</p>
					<p className="hover:text-blue-800 hover:underline cursor-pointer">
						Esqueci minha senha
					</p>
				</div>
				<Link href="/">
					<p className="w-full text-center my-5 py-2 bg-teal-600 shadow-lg shadow-teal-400/50 hover:shadow-teal-400/40 text-white font-semibold rounded-lg cursor-pointer">
						Entrar
					</p>
				</Link>
			</form>
		</div>
	);
}
