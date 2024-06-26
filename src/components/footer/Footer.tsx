import { Button } from "@/components/button/Button";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center p-8 container mx-auto">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-12 sm:mb-0">
          <Button className="sm:flex w-full sm:w-auto justify-between items-center gap-4">
            Garanta seu ingresso!
            <div className="p-2 bg-white rounded-full mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#292D32"
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
        </div>

        <div className="flex space-x-6">
          <a href="mailto:jsvix.contato@gmail.com">
            <img
              src="/icons/email.svg"
              alt="Email de contato"
              className="h-7 w-7"
            />
          </a>
          <a
            href="https://www.instagram.com/js.vix/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/instagram.svg"
              alt="Instagram"
              className="h-7 w-7"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/js-vix/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-7 w-7" />
          </a>
        </div>
      </div>
    </footer>
  );
};
