import { motion } from "framer-motion";

export default function Hero() {
	return (
		<section className="overflow-hidden flex flex-col gap-6 md:pt-[90px] ">
			<div className="px-4 flex flex-col gap-6">
				<h1 className="font-nb-architekt-bold text-gray-dark text-5xl md:mx-auto md:max-w-[768px] md:text-[64px] lg:text-balance md:text-center">
					Encontro mensal aberto à comunidade
					<motion.span variants={cursorVariants} animate="blinking">
						_
					</motion.span>
				</h1>
				<p className="text-gray-light font-geist-mono-bold font-bold text-lg sm:text-center">
					Encontro mensal aberto à comunidade, com conteúdo técnico sobre o
					ecossistema javascript
				</p>
			</div>
			<div className="relative flex justify-center">
				<img
					src="/hero.svg"
					className="w-[686px] h-[330px] object-cover md:w-[1008px] md:h-[484px] md:object-contain lg:w-[1104px]"
				/>
				<div className="absolute top-0 left-0 w-full h-full bg-gradient-hero lg:hidden" />
			</div>
		</section>
	);
}

const cursorVariants = {
	blinking: {
		opacity: [0, 0, 1, 1],
		transition: {
			duration: 1,
			repeat: Infinity,
			repeatDelay: 0,
			ease: "linear",
			times: [0, 0.5, 0.5, 1],
		},
	},
};
