import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function SkeletonCard() {
    return (
        <div className="bg-slate-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full flex flex-col hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-2 text-center text-gray-900 dark:text-gray-100">
                <Skeleton width={350} />
            </h2>
            <div className="flex flex-1">
                <div className="w-1/3 h-full">
                    <Skeleton height={300} />
                </div>
                <div className="w-2/3 p-6 flex flex-col justify-between">
                    <p className="mb-4 text-gray-900 dark:text-gray-100">
                        <Skeleton count={8} />
                    </p>
                    <div className="flex justify-between items-center text-sm mt-auto text-gray-700 dark:text-gray-300">
                        <p><Skeleton width={90} /></p>
                        <p><Skeleton width={60} /></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkeletonCard;
