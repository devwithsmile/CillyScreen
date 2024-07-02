import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function AllNavLinks({ toggleMenu }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <>
            <ul className='flex sm:space-x-1'> {/* Adjust margin as needed */}
                <li className='p-1 px-6 hover:bg-slate-200 hover:dark:bg-slate-900 border-e border-e-blue-300 dark:border-text_dark'><NavLink to='/' >Now Playing</NavLink></li>
                <li className='p-1 px-6 hover:bg-slate-200 hover:dark:bg-slate-900 border-e border-e-blue-300 dark:border-text_dark'><NavLink to='/popular'>Popular</NavLink></li>
                <li className='p-1 px-6 hover:bg-slate-200 hover:dark:bg-slate-900 border-e border-e-blue-300 dark:border-text_dark'><NavLink to='/topRated'>Top Rated</NavLink></li>
                <li className='p-1 px-6 hover:bg-slate-200 hover:dark:bg-slate-900 border-e border-e-blue-300 dark:border-text_dark'><NavLink to='/upcoming'>Upcoming</NavLink></li>
            </ul>
            <FontAwesomeIcon icon={faBars} className='lg:hidden pl-3' onClick={handleMenu} />

        </>
    )
}

export default AllNavLinks