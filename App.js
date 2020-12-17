import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

let styles = {
    margin: 'auto',
    width: '500px'
  };
  
function App() {
  return (
	<div style={styles}>
		<Carousel>
			<div>
				<img src="https://pngimg.com/uploads/bouquet/bouquet_PNG21.png" alt="Flower Bouquet" />
				<p className="legend">Flower Bouquet</p>
			</div>
			<div>
				<img src="https://freepngimg.com/thumb/rose/24672-3-rose.png" alt="Roses"/>
				<p className="legend">Roses</p>
			</div>
			<div>
				<img src="https://5.imimg.com/data5/EO/BJ/MY-39094424/tulip-flower-500x500.jpg" alt="Tulips"/>
				<p className="legend">Tulips</p>
			</div>
			<div>
				<img src="https://i.pinimg.com/originals/fe/cb/f9/fecbf953300d5d5d760585f7b253f301.png" alt="Sun Flower"/>
				<p className="legend">SunFlower</p>
			</div>
		</Carousel>
	</div>
  );
}

export default App;
