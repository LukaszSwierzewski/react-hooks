import React from "react"; 
import { useSelector, useDispatch } from 'react-redux'

import FeaturedProducts from "../components/ProductListing";
import { addCounter } from "../store/counterSlice";
import useUsers from "../store/hook/useData";
const HomePage = (props) => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()
    const [users] = useUsers()
    const incrementCount = () => {
        dispatch(addCounter())
    }
    return (
        <div>
            {users.length > 0 && users[0].email}
            <p>{props.author}</p>
            {counter.counter}
            <button onClick={incrementCount}>incrementzs</button>
            <FeaturedProducts />
        </div>
    )
}

export default HomePage