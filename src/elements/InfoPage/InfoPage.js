import React, { useEffect, useState } from 'react';
import infos from '../../Infos/infos';
import { useParams, useNavigate } from 'react-router-dom';
import Header from "../Header/header"
import Footer from "../Footer/Footer"
import './infopage.css'
import rightArrow from '../../img/right_arrow.png';
import leftArrow from '../../img/left_arrow.png';
import Accordion from '../Accordion/Accordion';
import inactiveStar from '../../img/star-inactive.png'
import activeStar from '../../img/star-active.png'

const InfoPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [info, setInfo] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const infoItem = infos.find((item) => item.id === id);
        if (infoItem) {
            setInfo(infoItem);
        } else {
            navigate('/error');
        }
    }, [id, navigate]);
    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % info.pictures.length);
    };

    const handlePreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + info.pictures.length) % info.pictures.length);
    };

    return (
        <div className="info-page-container">
            {info ? (
                <div>
                    <Header />
                    <div className="carousel-container">
                        <img src={info.pictures[currentImageIndex]} alt={info.title} className="carousel-image" />
                        <button className="carousel-button carousel-button-left" onClick={handlePreviousImage}>
                            <img src={leftArrow} alt="Précédent" className='carousel-img-left'/>
                        </button>
                        <button className="carousel-button carousel-button-right" onClick={handleNextImage}>
                            <img src={rightArrow} alt="Suivant" className='carousel-img-right' />
                        </button>
                        <div className="carousel-counter">
                            {currentImageIndex + 1}/{info.pictures.length}
                        </div>
                    </div>

                    <div className='container-top'>
                        <div>
                            <h1 className="info-title">{info.title}</h1>
                            <h2 className='info-location'>{info.location}</h2>
                            <ul className="list-tags">
                                {info.tags.map((tag, index) => (
                                    <li key={index} className="info-tags">{tag}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='container-bot'>
                            <div className="host-info">
                                <div className="host-names">
                                    {info.host.name.split(" ").map((namePart, index) => (
                                        <div key={index} className="host-name-part">{namePart}</div>
                                    ))}
                                </div>
                                <img src={info.host.picture} alt={`${info.host.name}`} className="host-picture" />
                            </div>
                            <div className="rating-container"> 
                                {[...Array(5)].map((star, index) => {
                                    return (
                                        <img
                                            key={index}
                                            src={index < info.rating ? activeStar : inactiveStar}
                                            alt={index < info.rating ? "active star" : "inactive star"}
                                            className="star"
                                        />
                                    );
                                })}
                            </div>

                        </div>

                    </div>
                    <div className='AccordionInfo-block'>
                        <Accordion
                            title="Description"
                            content={info.description}
                        />
                        <Accordion
                            title="Équipements"
                            content={info.equipments.map((equipment, index) => (
                                <li key={index} className="equipment-item">{equipment}</li>
                            ))}
                        />
                    </div>
                    <Footer />
                </div>
            ) : (
                <p className="loading-text">Chargement...</p>
            )}
        </div>
    );
};

export default InfoPage;
