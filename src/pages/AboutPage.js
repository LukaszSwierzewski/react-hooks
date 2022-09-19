import React, { useState } from "react"; 
import { useParams } from 'react-router-dom'
import Child from '../components/Child'
const AboutPage = () => {
    const params = useParams()
    const [count, setCount] = useState(0)

    const doSomeCalculation = (event, number) => {
        setCount(current => current + number)
    }
    return (
        <div>
            this is about page {params.id}
            <br />
            { count }
            <Child handleClick={doSomeCalculation} test={10} />
        </div>
    )
}

export default AboutPage