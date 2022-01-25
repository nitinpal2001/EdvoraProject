import React,{useState,useEffect} from 'react';
import ProductsCard from './ProductsCard';


export default function ProductsList() {
  const [Products, setProducts ] = useState([]);
    
  useEffect(() => {
      fetchList();
    }, []);
    
    const fetchList=async()=>{
      const data=await fetch('https://assessment-edvora.herokuapp.com')
      setProducts(await data.json());
    }
  
  return <div className='products-list'>
      {
        Products.map((element)=>{
          return (
            <div key={element.time}>
              <ProductsCard img={element.image} productName={element.product_name} brandName={element.brand_name} price={element.price} description={element.description} date={element.date} state={element.address["state"]} city={element.address["city"]}/>
            </div>
          )
        })
      }
  </div>;
}
