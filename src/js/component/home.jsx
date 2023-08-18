import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";
import Cards from "./cards.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					<div className="col-sm">
						<Cards />
					</div>
					<div className="col-sm">
						<Cards />
					</div>
					<div className="col-sm">
						<Cards />
					</div>
				</div>
			</div>

			<Footer />

		</div>
	);
};

export default Home;
