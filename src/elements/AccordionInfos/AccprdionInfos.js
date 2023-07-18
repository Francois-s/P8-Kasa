import React, { useState } from 'react';
import Arrow from "../../img/up_arrow.png"
import './AccordionInfos.css';

const AccordionInfos = ({ title, content }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleContent = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="info-accordion-container">
            <div className="info-accordion">
                <h3 className="info-accordion-title">
                    {title}
                    <img
                        className="info-accordion-arrow"
                        onClick={toggleContent}
                        src={Arrow}
                        alt="show content"
                        style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)' }}
                    />
                </h3>
                <div
                    className="info-accordion-content"
                    style={{ maxHeight: isExpanded ? '200px' : '0' }}
                >
                    {content}
                </div>
            </div>
        </div>
    );
};

export default AccordionInfos;
