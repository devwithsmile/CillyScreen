import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function SearchBoxSmall({handleInputChange}) {
    return (
        <div className="relative w-[13%]"> {/* Add margin to the right of the logo */}
            <input type="text"
                placeholder="Search"
                className="w-[280%] pl-8 pr-3 py-1 rounded-lg focus:outline-none focus:ring focus:border-blue-300 dark:bg-text_dark dark:text-text_light dark:placeholder-gray-400"
                onChange={handleInputChange}
            />
            <FontAwesomeIcon icon={faSearch} className="absolute left-2 top-2 text-gray-400 dark:text-gray-300" />
        </div>
    )
}

export default SearchBoxSmall;