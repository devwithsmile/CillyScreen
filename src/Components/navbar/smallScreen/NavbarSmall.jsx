import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCloudMoon, faCloudSun } from '@fortawesome/free-solid-svg-icons';
import CillyScreenLogo from '../../../assets/CillyScreen.png';
import AllNavLinks1 from './AllNavLinksSmall';
import { useDispatch, useSelector } from 'react-redux';
import { enable, disable } from '../../../slices/DarkMode/darkModeSlice';
import SearchBoxSmall from './SearchBoxSmall';


const NavbarSmall = ({ handleInputChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isDarkmode, setisDarkmode] = useState(false);
  useEffect(() => {
    const bodyElement = document.documentElement;
    if (bodyElement) {
      bodyElement.className = isDarkmode ? 'dark' : '';
    }
  }, [isDarkmode]);

  const darkMode = useSelector((state) => state.darkMode.value)
  const dispatch = useDispatch()

  const toggleDarkMode = () => {

    if (darkMode == "") {
      dispatch(enable())
      setisDarkmode(!isDarkmode)
    } else {
      dispatch(disable())
      setisDarkmode(!isDarkmode)
    }
  };


  return (
    <nav className="bg-slate-200 dark:bg-bg_dark px-1 text-text_light dark:text-text_dark py-2">
      <div className="flex justify-between items-center mt-1">
        <div className="flex flex-col items-center">
          <img src={CillyScreenLogo} alt="Logo" className="h-10 w-10 mb-0" />
          <span className="text-text_light dark:text-text_dark text-xl">CillyScreen</span>
        </div>

        <SearchBoxSmall handleInputChange={handleInputChange}/>
        <button onClick={toggleDarkMode} className='ml-16 text-text_light dark:text-text_dark'>
          <FontAwesomeIcon icon={isDarkmode ? faCloudSun : faCloudMoon} />
        </button>

        <button onClick={toggleMenu} className='text-text_light dark:text-text_dark'>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>

      </div>
      {isOpen && (
        <div className="flex justify-between items-center">
          <AllNavLinks1 toggleMenu={toggleMenu} />
        </div>
      )}
    </nav>
  );
};

export default NavbarSmall;
