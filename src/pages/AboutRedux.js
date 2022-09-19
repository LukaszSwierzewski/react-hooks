import { useSelector, useDispatch } from 'react-redux'

import React from "react"; 
import { addToppings } from '../store/pizzaSlice';
const HomePage = () => {
    const pizza = useSelector(state => state.pizza)
    const dispatch = useDispatch()

    console.log(pizza)
    return (
        <div>
            {pizza.gluten && <p>asd</p>}
            {pizza.toppings.map((topping, index) => (
                <div key={index}>{topping}</div>
            ))}
            <button onClick={() => dispatch(addToppings('peperroni'))}>Add toppings</button>
        </div>
    )
}

export default HomePage