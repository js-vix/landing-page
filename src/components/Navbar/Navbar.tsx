import Button from "../Button";

export const Navbar = () => (
	<nav
		className={`text-[#919191] nav xl:mx-28 lg:my-8 mx-8 my-8 sm:mx-8 sm:my-8 flex items-center justify-between max-h-12 font-geist-mono-vf`}
	>
		<img src="logo.svg" alt="Logo" className="w-28 h-12" />
		<ul className={`xl:visible invisible lg:flex items-center`}>
			<li>
				<a href="#patrocinadores" className="px-4 py-2 hover:text-[#CCC]">
					Patrocinadores
				</a>
			</li>
			<li>
				<a href="#palestras" className="px-4 py-2 hover:text-[#CCC]">
					Palestras
				</a>
			</li>
			<li>
				<a href="#edicoes" className="px-4 py-2 hover:text-[#CCC]">
					Edições
				</a>
			</li>
			<li>
				<a href="#local-hora" className="px-4 py-2 hover:text-[#CCC]">
					Local e Horário
				</a>
			</li>
		</ul>
		<Button className="hidden lg:flex">
			Ingressos
			<div className="p-2 bg-white rounded-full">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="black"
					className="size-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
					/>
				</svg>
			</div>
		</Button>
	</nav>
);
