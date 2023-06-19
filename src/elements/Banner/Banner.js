import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './banner.css';


export default function Banner() {
	const [isAboutPage, setIsAboutPage] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setIsAboutPage(location.pathname === '/about');
	}, [location.pathname]);

	return (
		<section className={isAboutPage ? 'banner_about' : 'banner_home'}>
			{!isAboutPage && <p className='banner_p'>Chez vous, partout et ailleurs</p>}
		</section>
	);
}