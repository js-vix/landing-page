
import Title from "../Title"
export const EventInfo = () => {
  return (
    <div className="flex flex-col items-center p-8 container mx-auto p md:mb-[100px]">
       <Title>DATA E HORÁRIO_</Title>
      <div className="flex flex-col md:flex-row bg-[#F9F9F9] shadow-none rounded-3xl overflow-hidden w-full">
        <div className="flex flex-col md:w-1/2 p-5 sm:p-10 md:p-10 ">
          <h2 className="text-xl font-semibold mb-2 text-[32px] md:text-[48px] md:mb-40 mb-10">INFO.</h2>
          <div className="flex items-center mb-4">
           <img className="mr-3" src="/icons/calendar.svg" alt="Ícone" />
            <div>
              <p className=" text-[24px] font-bold">WE BELIVE HUB</p>
              <p className="text-sm  text-gray-600 text-[16px]">Praia da Costa, VV - ES</p>
            </div>
          </div>
          <div className="flex items-center">
          <img className="mr-3" src="/icons/location.svg" alt="Ícone" />
            <div>
              <p className=" text-[24px] font-bold">22 DE MAIO</p>
              <p className="text-sm text-gray-600 text-[16px]">a partir das 19hrs</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 h-[300px] md:h-auto">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.2692438653166!2d-40.28380372395748!3d-20.33049295090628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb817c78e90e84b%3A0xe4a135ea34b16aab!2sWeBelieve%20Hub%20e%20Coworking!5e0!3m2!1spt-BR!2sbr!4v1718046131523!5m2!1spt-BR!2sbr" width="100%" height="100%" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
};
