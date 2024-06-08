import React from 'react'
import { NavLink } from 'react-router-dom';

function AllNavLinksSmall({ toggleMenu }) {
    return (
        <>
            <ul className='ml-[64%] md:ml[84%] mt-1'>
                <li className='p-1 px-6 hover:bg-slate-200 hover:dark:bg-slate-900 border-e border-e-blue-300 dark:border-text_dark'><NavLink to='/' onClick={toggleMenu}>Now Playing</NavLink></li>
                <li className='p-1 px-6 hover:bg-slate-200 hover:dark:bg-slate-900 border-e border-e-blue-300 dark:border-text_dark'><NavLink to='/popular' onClick={toggleMenu}>Popular</NavLink></li>
                <li className='p-1 px-6 hover:bg-slate-200 hover:dark:bg-slate-900 border-e border-e-blue-300 dark:border-text_dark'><NavLink to='/topRated' onClick={toggleMenu}>Top Rated</NavLink></li>
                <li className='p-1 px-6 hover:bg-slate-200 hover:dark:bg-slate-900 border-e border-e-blue-300 dark:border-text_dark'><NavLink to='/upcoming' onClick={toggleMenu}>Upcoming</NavLink></li>
            </ul>

        </>
    )
}

export default AllNavLinksSmall