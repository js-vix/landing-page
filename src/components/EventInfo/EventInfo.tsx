
import Title from "../Title"
export const EventInfo = () => {
  return (
    <div className="flex flex-col items-center p-8 container mx-auto p">
       <Title>DATA E HORÁRIO_</Title>
      <div className="flex flex-col md:flex-row bg-[#F9F9F9] shadow-none rounded-xl overflow-hidden w-full">
        <div className="flex flex-col md:w-1/2 p-5 sm:p-10 md:p-10 ">
          <h2 className="text-xl font-semibold mb-2 text-[32px] md:text-[48px] md:mb-40 mb-10">INFO.</h2>
          <div className="flex items-center mb-4">
          {/* <svg width="25" className="mr-3" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.33337 2.08331V5.20831" stroke="#292D32" stroke-width="1.32222" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.6667 2.08331V5.20831" stroke="#292D32" stroke-width="1.32222" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.64587 9.46875H21.3542" stroke="#292D32" stroke-width="1.32222" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21.875 8.85415V17.7083C21.875 20.8333 20.3125 22.9166 16.6667 22.9166H8.33333C4.6875 22.9166 3.125 20.8333 3.125 17.7083V8.85415C3.125 5.72915 4.6875 3.64581 8.33333 3.64581H16.6667C20.3125 3.64581 21.875 5.72915 21.875 8.85415Z" stroke="#292D32" stroke-width="1.32222" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.3486 14.2708H16.358" stroke="#292D32" stroke-width="1.76296" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.3486 17.3958H16.358" stroke="#292D32" stroke-width="1.76296" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.4953 14.2708H12.5046" stroke="#292D32" stroke-width="1.76296" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.4953 17.3958H12.5046" stroke="#292D32" stroke-width="1.76296" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.63993 14.2708H8.64928" stroke="#292D32" stroke-width="1.76296" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.63993 17.3958H8.64928" stroke="#292D32" stroke-width="1.76296" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> */}
            <img className="mr-3" src="/icons/calendar.svg" alt="Ícone" />
            <div>
              <p className="font-bold text-[24px]">WE BELIVE HUB</p>
              <p className="text-sm text-gray-600 text-[16px]">Praia da Costa, VV - ES</p>
            </div>
          </div>
          <div className="flex items-center">
          <img className="mr-3" src="/icons/location.svg" alt="Ícone" />
            <div>
              <p className="font-bold text-[24px]">22 DE MAIO</p>
              <p className="text-sm text-gray-600 text-[16px]">a partir das 19hrs</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 h-[300px] md:h-auto">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.2692438653166!2d-40.28380372395748!3d-20.33049295090628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb817c78e90e84b%3A0xe4a135ea34b16aab!2sWeBelieve%20Hub%20e%20Coworking!5e0!3m2!1spt-BR!2sbr!4v1718046131523!5m2!1spt-BR!2sbr" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
};