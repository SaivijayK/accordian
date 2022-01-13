import React,{useState} from 'react'
import { questions } from './api'
import "./Accordian.css"
import MyAccordian from "./MyAccordian"


const Accordian = () => {
    const [data,setData]=useState(questions)
    return (
        <div className='main'>
        <section>
        <h1>Accordian</h1>
        {
            data.map((curElem)=>{
                return <MyAccordian key={curElem.id}{...curElem}/>
            })
        }
        </section>

        </div>
    )
}
export default Accordian
