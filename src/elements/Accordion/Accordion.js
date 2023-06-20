import React, { useState } from 'react';
import Arrow from "../../img/up_arrow.png"
import './Accordion.css';

const Accordion = ({ title, content }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleContent = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="accordion-container">
            <div className="accordion">
                <h3 className="accordion-title">
                    {title}
                    <img
                        className="accordion-arrow"
                        onClick={toggleContent}
                        src={Arrow}
                        alt="show content"
                        style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)' }}
                    />
                </h3>
                <div
                    className="accordion-content"
                    style={{ maxHeight: isExpanded ? '200px' : '0' }}
                >
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Accordion;
