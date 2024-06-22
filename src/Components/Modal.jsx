import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Skeleton from 'react-loading-skeleton';
import '../App.css'; // Ensure this imports your CSS with modal styles

const Modal = ({ show, onClose, videoKey }) => {
    const modalRef = useRef(null);

    const handleEscKey = (event) => {
        if (event.key === "Escape") {
            onClose();
        }
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };

    useEffect(() => {
        if (show) {
            document.addEventListener('keydown', handleEscKey, { passive: true });
            document.addEventListener('mousedown', handleClickOutside, { passive: true });
        } else {
            document.removeEventListener('keydown', handleEscKey, { passive: true });
            document.removeEventListener('mousedown', handleClickOutside, { passive: true });
        }

        return () => {
            document.removeEventListener('keydown', handleEscKey, { passive: true });
            document.removeEventListener('mousedown', handleClickOutside, { passive: true });
        };
    }, [show]);

    if (!show) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 modal-backdrop ${show ? 'show' : ''}`}>
            <div ref={modalRef} className={`bg-bg_light dark:bg-bg_dark rounded-lg shadow-lg overflow-hidden modal-content ${show ? 'show' : ''}`}>
                <div className="p-4">
                    {/* Removed Close button */}
                </div>
                <div className="p-4">
                    {videoKey ? (
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${videoKey}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Trailer"
                        ></iframe>
                    ) : (
                        <Skeleton />
                    )}
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
