import "./display.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./Data";

function Display() {
const product = productData.map((item) => (
<Product
name={item.name}
description={item.description}
url={item.imageurl}
price={item.price}
text={item.text}
/>
));

return (
<div className="App">
<Carousel showDots={true} responsive={responsive} infinite={true} autoPlaySpeed={8000} transitionDuration={500} autoPlay={true} >
{product}
</Carousel>
</div>
);
}
export default Display