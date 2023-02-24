import React,{useState} from "react";


const Product = (props) => {

const { image, name, description, price ,onAddToCart} = props;
const[showDescription,setShowDescription] = useState(false);


const toggleDescription =()=>{
 setShowDescription(!showDescription)

}

  return (
    
 <div className="img-container">
    <div className="my_products">
       <img src={image} alt={name} className="my_products" />
        <div className="img_description">
          <h3>{name}</h3>
          <p className="description">
          {showDescription && description}
         </p>
          <div className="price">${price}</div>
           <button className="more" onClick={toggleDescription}>
            {showDescription ? 'Less Info' : 'More Info'}
           </button>
           <button className="add-item" onClick={onAddToCart}>Add to Cart</button>
       </div>
    </div>
  </div>
);
}



export default Product;




