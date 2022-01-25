import React,{useState,useEffect} from 'react';

export default function Dropdowns(props) {
  const [Products, setProducts ] = useState([]);
    
  useEffect(() => {
      fetchList();
    }, []);
    
    const fetchList=async()=>{
      const data=await fetch('https://assessment-edvora.herokuapp.com')
      setProducts(await data.json());
    }
  return(
      <div className="dropdown show">
  <a className="btn btn-secondary dropdown-toggle custom-dropdown" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" data-bs-toggle="dropdown" aria-expanded="false">
    {props.title}
  </a>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    {Products.map((element)=>{
      return <a className="dropdown-item" key={element.time} href="#">{element.product_name}</a>
    })}
  </div>
</div>
)
}

