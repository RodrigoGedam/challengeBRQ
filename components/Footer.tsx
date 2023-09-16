import Image from "next/image";

export default function Footer() {
	const footerLinks = [
		{
			title: "About",
			links: [
				{ title: "How it works" },
				{ title: "Featured" },
				{ title: "Partnership" },
				{ title: "Bussiness Relation" },
			],
		},
		{
			title: "Company",
			links: [
				{ title: "Events" },
				{ title: "Blog" },
				{ title: "Podcast" },
				{ title: "Invite a friend" },
			],
		},
		{
			title: "Socials",
			links: [
				{ title: "Discord" },
				{ title: "Instagram" },
				{ title: "Twitter" },
				{ title: "Facebook" },
			],
		},
	];

	return (
		<footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
			<div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
				<div className="flex flex-col justify-start items-start gap-6">
					<Image
						src="/logo.svg"
						alt="Logo"
						width={118}
						height={18}
						className="object-contain"
					/>
					<p className="text-base text-gray-700">
						Nome da Empresa 2023 <br />
						Todos os direitos Reservados &copy;
					</p>
				</div>
				<div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
					{footerLinks.map((link) => (
						<div
							key={link.title}
							className="flex flex-col gap-6 text-base min-w-[170px]"
						>
							<h3 className="font-bold">{link.title}</h3>
							{link.links.map((item) => (
								<p
									key={item.title}
									className="text-gray-500 cursor-pointer"
								>
									{item.title}
								</p>
							))}
						</div>
					))}
				</div>
			</div>
			<div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
				<p>@2023 Nome da Empresa. Todos os Direitos Reservados</p>
				<div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
					<p className="text-gray-500">Política de Privacidade</p>
					<p className="text-gray-500">Termos de Uso</p>
				</div>
			</div>
		</footer>
	);
}
