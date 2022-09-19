import React from "react"; 
import { NavLink } from 'react-router-dom'
import { useStore } from "../store/hook/useStore";
const NotFound = ({test}) => {
    const { state } = useStore();
    const {count } = state
    return (
        <div>
            Not found <NavLink to='/home'>Back to home page. {test}</NavLink>
            <p>From custom state managment <b>{count}</b></p>
        </div>
    )
}

export default NotFound