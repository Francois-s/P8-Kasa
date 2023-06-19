import Header from "../elements/Header/header"
import Footer from "../elements/Footer/Footer"
import Banner from "../elements/Banner/Banner"
import Gallery from "../elements/Gallery/Gallery"

export default function Home() {
	return (
		<div className='home'>
			<Header/>
			<Banner/>
			<Gallery/>
            <Footer/>
		</div>
	)
}