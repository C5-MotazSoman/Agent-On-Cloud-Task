import "./style.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  // function to get all product
  
  const getProduct = async () => {
    await axios
      .get("http://localhost:5000/product"
      )
      .then((result) => {
        // console.log(result.data.result);
        setProducts(result.data.result)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(()=>{getProduct()}, []);
  return <div className="products_container">
    {
        products&&products.map((ele)=>{
            return (
                <div className="product_content"  key={ele._id}>
                    <h3>{ele.title}</h3>
                    <p>{ele.desc}</p>
                    <img src={ele.image} alt={ele.title} onClick={()=>{navigate(`/product/:${ele._id}`)}}></img>
                    <p>
                        <strong>${ele.price}</strong>
                    </p>
                    <button> Add to cart</button>
                </div>
            )
        })
    }

  </div>;
}

export default Home;
