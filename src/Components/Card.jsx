import { faCalendarDays, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo } from 'react';

function Card({ name, overview, img, releaseDate, voteAverage }) {

    const truncateOverview = (text) => {
        if (text.length > 200) {
            return text.substring(0, 210) + '...';
        }
        return text;
    };

    return (
        <div className="bg-slate-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full flex flex-col hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-2 text-center text-gray-900 dark:text-gray-100">{name}</h2>
            <div className="flex flex-1">
                <div className="w-1/3 h-full">
                    <img src={img} alt={name} className="w-full h-full object-cover" />
                </div>
                <div className="w-2/3 p-6 flex flex-col justify-between">
                    <p className="mb-4 text-gray-900 dark:text-gray-100">{truncateOverview(overview)}</p>
                    <div className="flex justify-between items-center text-sm mt-auto text-gray-700 dark:text-gray-300">
                        <p><FontAwesomeIcon icon={faCalendarDays} /> : {releaseDate}</p>
                        <p><FontAwesomeIcon icon={faStar} /> : {voteAverage}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Card);
