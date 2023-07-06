import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../Header/header"
import Footer from "../Footer/Footer"
import './ErrorPage.css'

function ErrorPage() {
    return (
        <div>
            <Header />
            <div className="error-page-container">
                <div className="error-code">404</div>
                <div className="error-message">Oups! La page que vous demandez n'existe pas.</div>
                <Link to={`/`} className="error-link">Retourner sur la page d’accueil</Link>
            </div>
            <Footer />

        </div>
    );
}


export default ErrorPage;
