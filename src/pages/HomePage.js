import React from "react"; 
import { useSelector, useDispatch } from 'react-redux'

import FeaturedProducts from "../components/ProductListing";
import { addCounter } from "../store/counterSlice";
const HomePage = (props) => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()
    const incrementCount = () => {
        dispatch(addCounter())
    }
    return (
        <div>
            <p>{props.author}</p>
            {counter.counter}
            <button onClick={incrementCount}>incrementzs</button>
            <FeaturedProducts />
        </div>
    )
}

export default HomePage