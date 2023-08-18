import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Cards = () => {
	return (
		<div className="container">
<div className="card" style={{width: "18rem"}}>
  <img src="https://th.bing.com/th/id/OIP.8g6FehTGg-yPmtvGMiqvAQHaE7?pid=ImgDet&rs=1" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
		</div>
	);
};

export default Cards;