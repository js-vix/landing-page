import Button from '../button'
import styles from './style.module.css'
const Navbar = () => {

  return (
    <nav className={`${styles.nav} bg-white-800 text-black nav`}>
      <div className="container mx-auto flex items-center justify-between pt-3 pb-3 ml-3 sm:ml-auto">
        <a href="/" className="flex items-center">
          <img src="logo.svg" alt="Logo" className={`${styles.logobar} h-6`} />
        </a>
        <ul className={`hidden lg:flex items-center`}>
          <li><a href="#patrocinadores" className="px-4 py-2 ">Patrocinadores</a></li>
          <li><a href="#palestras" className="px-4 py-2 ">Palestras</a></li>
          <li><a href="#edicoes" className="px-4 py-2 ">Edições</a></li>
          <li><a href="#local-hora" className="px-4 py-2 ">Local e Horário</a></li>
        </ul>
        <Button hideOnMobile text="Ingressos" />
        
      </div>
    </nav>
  );
};

export default Navbar;
