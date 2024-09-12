import { useEffect, useState } from "react";
import './product.css';
import { motion } from "framer-motion"
import List from "./List";


function ProductList() {

const[pro , setproducts] = useState([]);

const[Catogery , setCatogery] = useState([]);






const getdata = () => {
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(data=> setproducts(data));

}


 const getcatogry = () => {
    fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    .then(data=> setCatogery(data));

 }
 const getproductcatogry = (catname) => {

  fetch(`https://fakestoreapi.com/products/category/${catname}`)
  .then(res=>res.json())
  .then(data=> setproducts(data))

 }


      useEffect (()=> {

        getdata();
        getcatogry();
    },[])


  return(
<div className="ProductList">
<h2> OUR PRODUCT </h2> 

    <div className="container">

    {Catogery.map((cat) =>{
                return(
              <motion.button
            
                  layout
                  animate={{ transform: "scale(1)" }}
                  initial={{ transform: "scale(0)" }}
                  transition={{ type: "spring" ,damping:8}}
                   key={cat} onClick={() => {
                    getproductcatogry(cat)
                  }}
                  
                  className="btn btn-primary namm">  {cat}</motion.button>
             
                );
            }) }



    <div className="row">




             {pro.map((product) =>{
                return(
                    <motion.div
            
                    layout
                    animate={{ transform: "scale(1)" }}
                    initial={{ transform: "scale(0)" }}
                    transition={{ type: "spring" ,damping:8}}
                     className="col-3" key={product.id}>
                      <List product={product}/>


       
                 </motion.div>
                );
            }) }

</div>
</div>
</div>



  )
};




export default ProductList;
