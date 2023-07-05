import Header from "../elements/Header/header"
import Footer from "../elements/Footer/Footer"
import Banner from "../elements/Banner/Banner"
import Gallery from "../elements/Gallery/Gallery"
import "./Home.css"

export default function Home() {
	return (
		<div>
			<div className='home'>
				<Header />
				<Banner />
				<Gallery />
			</div>
			<Footer />
		</div>

	)
}