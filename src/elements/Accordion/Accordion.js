import React, { useState } from 'react';
import Arrow from "../../img/up_arrow.png"
import './Accordion.css';
import { useLocation } from 'react-router-dom';

const Accordion = ({ title, content }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const location = useLocation();

    // Verifie si le chemin d'accès actuel commence par '/info/'
    const isInfoRoute = location.pathname.startsWith('/info/');
    const baseClass = isInfoRoute ? 'info-accordion' : 'accordion';

    const toggleContent = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`${baseClass}-container`}>
            <div className={baseClass}>
                <h3 className={`${baseClass}-title`}>
                    {title}
                    <img
                        className={`${baseClass}-arrow`}
                        onClick={toggleContent}
                        src={Arrow}
                        alt="show content"
                        style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)' }}
                    />
                </h3>
                <div
                    className={`${baseClass}-content`}
                    style={{ maxHeight: isExpanded ? '200px' : '0' }}
                >
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Accordion;
