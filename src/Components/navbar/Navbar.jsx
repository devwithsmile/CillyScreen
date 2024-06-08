import React, { memo, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { faCloudSun, faCloudMoon, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import CillyScreenLogo from '../../assets/CillyScreen.png';
import { useSelector, useDispatch } from 'react-redux';
import { enable, disable } from '../../slices/DarkMode/darkModeSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AllNavLinks from './AllNavLinks';
import SearchBox from './SearchBox';


function Navbar({ handleInputChange }) {


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

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='bg-slate-200 dark:bg-neutral-900 flex justify-between py-1 shadow-sm text-text_light dark:text-text_dark dark:border-y-sky-500 dark:shadow-sm dark:shadow-gray-200 fixed w-full' >
            <div className="flex items-center sm:flex-wrap md:flex-wrap"> {/* Container for logo, search button, and navigation links */}

                <NavLink to='/'> <img src={CillyScreenLogo} alt="CillyScreen Logo" className="h-12" /></NavLink>
                <NavLink to='/' className="website-name"> <p className='mr-10'>CillyScreen</p></NavLink>  {/*name of the website */}

                <SearchBox handleInputChange={handleInputChange} />
                <AllNavLinks toggleMenu={toggleMenu} />

            </div>
            <button onClick={toggleDarkMode} className='px-5'>
                <FontAwesomeIcon icon={isDarkmode ? faCloudSun : faCloudMoon} />
            </button>
        </nav>
    );
}

export default memo(Navbar);