import React, { useState } from "react"; 
import { useParams } from 'react-router-dom'
import Child from '../components/Child'
import { useStore } from "../store/hook/useStore";
import Button from '../components/Button'
const AboutPage = () => {
    const params = useParams()
    const [count, setCount] = useState(0)
    const { state, dispatch } = useStore();
    const doSomeCalculation = (event, number) => {
        setCount(current => current + number)
    }
    const obj = {
        buttonText: 'click me', 
        toggler: state.loading,
        handleClick: () => {
            dispatch({type: 'fetch/loading'})
      }}
    return (
        <div>
            this is about page {params.id}
            <br />
            { count }
            <br />
            {state.loading && <p>state changed</p>}
            {state.persons && state.persons.name}
            <Child handleClick={doSomeCalculation} test={10} />
            <Button data={obj} />
        </div>
    )
}

export default AboutPage