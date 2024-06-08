import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function SearchBox({handleInputChange}) {
    return (
        <div className="relative mr-72 sm:w-3"> {/* Add margin to the right of the logo */}
            <input type="text"
                placeholder="Search"
                className="pl-8 pr-3 py-1 rounded-lg focus:outline-none focus:ring focus:border-blue-300 dark:bg-text_dark dark:text-text_light dark:placeholder-gray-400"
                onChange={handleInputChange}
            />
            <FontAwesomeIcon icon={faSearch} className="absolute left-2 top-2 text-gray-400 dark:text-gray-300" />
        </div>
    )
}

export default SearchBox