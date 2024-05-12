import React ,{useEffect,useState} from 'react'
import ProductCard from '../ProductCard' 
import Filters from '../Filters'

import Select from 'react-select'
import { FaLessThan } from "react-icons/fa";

import './style.css'

const Products = () => {

 const [products, setProducts] = useState([]);
  const [filterMenu,setFilterMenu] = useState(false) ;
  const [selectedCategory,setSelectedCategory] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data); // Update state with fetched products
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this effect runs once after initial render

 const categories = Array.from(
  new Set(products.map((res)=>res.category))
 )

 const categoryOptions = categories.map((category)=>({
    value:category,
    label:category
 }))

 const filteredProducts = selectedCategory ? products.filter((product)=>product.category === selectedCategory.value) : products ;

 const renderFilterSelection =() =>{
    return(
      <>
      <div className='select-filter-container'>
        <div className='filter-container'>
         <h4>3425 Items</h4>
          <button onClick={()=>{setFilterMenu(!filterMenu)}}><FaLessThan /></button>
          <p onClick={()=>{setFilterMenu(!filterMenu)}}>{filterMenu ? "Hide Filters":"Show Filters"}</p>
        </div>
        <div>
        <Select 
        className='drop-down'
         options={categoryOptions}
         isClearable
         placeholder="Recomended" 
         onChange={(selectOption)=>setSelectedCategory(selectOption)}
         value={selectedCategory}
      />
</div>
      </div>
    </>
    )
 }

  return (
    <>
      {renderFilterSelection()}
      <section className='main-section'>
          <p className={filterMenu ? 'open' : ""}><Filters/></p>
        <div className="product-container">
           {filteredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
          ))}
       </div>
      </section>
      </>
  )
}

export default Products