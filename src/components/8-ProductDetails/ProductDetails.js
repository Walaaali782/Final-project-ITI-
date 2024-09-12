import {useParams } from 'react-router-dom';
import { useEffect,useState } from "react";
import './productdetails.css';



function ProductDetails(props){


    const api = 'https://fakestoreapi.com/products' ;
    const params =  useParams();
    console.log(params);

    const[product , setproducts] = useState([]);

    useEffect (()=> {

        fetch(`${api}/${params.productId}`)
        .then(res=>res.json())
        .then(product=> setproducts(product));


    },[])





    return(
<>
<div className="carddetails" >
<div className="container" >
  <img src={product.image} className="card-img-top-details" alt={product.title} />
  <div className="card-body-details">
    <h5 className="card-title-details">{product.title}</h5>
    <p className="card-text-details">{product.description}</p>
    <p className="card-text-price">{product.price}$</p>

  </div>
  </div>
</div>
</>

    )
}
export default ProductDetails;