import React from "react"; 
import { useSelector, useDispatch } from 'react-redux'

import FeaturedProducts from "../components/ProductListing";
import { addCounter } from "../store/counterSlice";
import useUsers from "../store/hook/useData";
import Button from '../components/Button'
import { useState } from "react";
const HomePage = (props) => {
    const counter = useSelector(state => state.counter)
    const obj = {
        buttonText: 'click me', 
        toggler: false,
        handleClick: function () {
            btnSet(current => {
                current.buttonText = 'mozna tez tak'
               return {...current}
            })
        }
    }

    const [btn, btnSet] = useState(obj)
    const toggleObj = (val) => {
        obj.toggler = !val
        btnSet(obj)
        console.log(obj)
    }
    const dispatch = useDispatch()
    const [users] = useUsers()
    const incrementCount = () => {
        dispatch(addCounter())
    }
    return (
        <div>
            {users.length > 0 && users[0].email}
            {btn.toggler && <p>btn toggler is true</p>}
            <p>{props.author}</p>
            {counter.counter}
            {btn.buttonText}
            <button onClick={event => toggleObj(btn.toggler)}>react to gowno</button>
            <Button data={btn} />
            <button onClick={incrementCount}>incrementzs</button>
            <FeaturedProducts />

        </div>
    )
}

export default HomePage