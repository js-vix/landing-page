import Title from "../Title";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
  } from "../carousel"

  const editions = [
	{
	  img: "/events/event-img.png",
	  title: "JS-VIX - 2º EDIÇÃO",
	  description: "Descubra quais são os temas, e quem irá apresentar as palestras nessa nova edição da JS-VIX.",
	},
	{
	  img: "/events/event-img.png",
	  title: "JS-VIX - 3º EDIÇÃO",
	  description: "Encontro mensal aberto à comunidade, com conteúdo técnico sobre o ecossistema JavaScript.",
	},
	{
		img: "/events/event-img.png",
		title: "JS-VIX - 3º EDIÇÃO",
		description: "Encontro mensal aberto à comunidade, com conteúdo técnico sobre o ecossistema JavaScript.",
	},
	{
		title: "JS-VIX - 3º EDIÇÃO",
		description: "Encontro mensal aberto a comunidade, com conteúdo técnico sobre o ecossistema javascript",
		location: {
			name: "WE BELIVE HUB",
			loc: "Praia da Costa, VV - ES"
		}
	}
  ];

export default function Editions() {
	return (
		<section className="md:mb-[100px] mb-5">
		<div className="flex flex-col pt-8 pl-8 pr-8 pb-0 container mx-auto p">
			 <Title>descubra as próximas edições, ou revisite as passadas_</Title>
		</div>
		<div className="flex flex-col mx-auto pl-8 pr-8 pb-20 pt-0 p container">
			<Carousel opts={{ startIndex: 2 }} className="relative flex flex-col md:mr-auto md:ml-[-8rem] lg:ml-[-20rem]">
				<CarouselContent className="flex">
				{editions.map((edition, index) => (
					<CarouselItem key={index} className={`p-3 flex ${edition.location ? 'md:basis-1/4 lg:basis-1/4' : 'md:basis-1/2 lg:basis-1/2'}`}>
					  {!edition.location && (
					  <div className="flex flex-col bg-[#F9F9F9] rounded-3xl w-full">
							<img src={edition.img} alt={edition.title} className="rounded-t-3xl" />
							<div className="pl-10 pr-5 pt-5 pb-8 flex-grow flex flex-col">
								<h2 className="text-[36px] font-bold mb-2">{edition.title}</h2>
								<p className="font-geist-mono-bold text-[14px] text-[#919191]">{edition.description}</p>
							</div>
					  </div>
					  )} 
					  {edition.location && (
					  <div className="flex flex-col p-5 bg-[#FFDC00] rounded-3xl w-full">
						<div className="p-5 flex-grow flex flex-col">
							<p className="font-geist-mono-bold text-[14px] text-[#2D2C2D] mb-4">Em breve</p>
							<h2 className="text-[36px] leading-10 font-bold mb-4">{edition.title}</h2>
							<p className="font-geist-mono-bold text-[14px] text-[#2D2C2D]">{edition.description}</p>
							<div className="absolute bottom-5 min-w-52">
							   <img className="ml-[-2px] mb-1" src="/icons/calendar.svg" alt="Ícone" />
							   <h2 className="text-[16px] font-bold mb-1">{edition.location.name}</h2>
							   <p className="font-geist-mono-vf text-[14px] text-[#2D2C2D] mb-4">{edition.location.loc}</p>
							</div>
						</div>
					</div>
					)}
				    </CarouselItem>
				))}
				</CarouselContent>
				<div className="absolute flex justify-center space-x-1 -bottom-10 md:-bottom-16 md:left-[25%]">
					<CarouselPrevious className="absolute w-[50px] h-[50px] md:w-[40px] md:h-[40px] left-[0] md:left-0 -bottom-1 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">‹</CarouselPrevious>
					<CarouselNext className="absolute w-[50px] h-[50px] md:w-[40px] md:h-[40px] left-12 md:left-10 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">›</CarouselNext>
				</div>
			</Carousel>
		</div>
		</section>
	);
}