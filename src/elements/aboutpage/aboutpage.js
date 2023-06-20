import React from 'react';
import Header from "../Header/header"
import Footer from "../Footer/Footer"
import Banner from '../Banner/Banner';
import Accordion from '../Accordion/Accordion';


const AboutPage = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Accordion
                title="Fiabilité"
                content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
            />
            <Accordion
                title="Respect"
                content="La bienveillance fait partie des valeurs de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            />
            <Accordion
                title="Service"
                content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
            />
            <Accordion
                title="Sécurité"
                content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            />
            <Footer />
        </div>
    );
};

export default AboutPage;
