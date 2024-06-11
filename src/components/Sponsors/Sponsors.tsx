import React from "react";

/** @description Componente que mostra os patrocinadores */
export const Sponsors = () => {
  return (
    <div className="grid grid-cols-2 justify-items-center sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:flex lg:justify-center lg:items-center lg:gap-0">
      <div className="flex justify-center items-center lg:mx-6">
        <img
          className="w-full h-auto max-w-xs md:max-w-full lg:max-w-xs"
          src="/apoiadores/slabware.svg"
          alt="SlabWare"
        />
      </div>
      <div className="flex justify-center items-center lg:mx-16">
        <img
          className="w-full h-auto max-w-xs md:max-w-full lg:max-w-xs"
          src="/apoiadores/flexa.svg"
          alt="Flexa"
        />
      </div>
      <div className="flex justify-center items-center lg:mx-6">
        <img
          className="w-full h-auto max-w-xs md:max-w-full lg:max-w-xs"
          src="/apoiadores/globalsys.svg"
          alt="GlobalSys"
        />
      </div>
      <div className="flex justify-center items-center lg:mx-6">
        <img
          className="w-full h-auto max-w-xs md:max-w-full lg:max-w-xs"
          src="/apoiadores/we-believe-hub.svg"
          alt="We Believe Hub"
        />
      </div>
    </div>
  );
};
