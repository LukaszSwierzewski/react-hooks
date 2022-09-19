
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useStore } from 'react-redux'
import { addProducts } from '../store/pizzaSlice';
const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
useEffect(() => {
  fetchProducts();
}, []);
const pizza = useSelector(state => state.pizza)
const store = useStore()
const fetchProducts = async () => {
  if (pizza.products.length > 1) return setProducts(pizza.products)
  try {
    const rawData = await fetch('https://shoppingapiacme.herokuapp.com/shopping')
    const products = await rawData.json()
    store.dispatch(addProducts(products))
    setProducts(products)
  } catch (e) {
    console.error(e)
  }
};
return (
    <div>
      <h1>Featured Products</h1>
      <div className='item-container'>
        {pizza.gluten && <p>aaaaa</p>}
        {products.map((product) => (
          <div className='card' key={product.id}>
            <img src={product.image} alt='' />
            <h3>{product.brand}</h3>
            <p>{product.item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FeaturedProducts;