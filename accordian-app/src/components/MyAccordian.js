import React,{useState} from 'react'
import { questions } from './api'

const Myaccordian = ({question,answer}) => {
    const [show,setShow]=useState(false);
    return (
        
        <div>
        <div className='main-heading'>
            <div className='plus'><h1 onClick={()=>setShow(!show)}>{show?"-":"+"}</h1></div>
            <div className='question'><h3>{question}</h3></div>
        </div>
        {show? <p className='para'>{answer}</p>:<p></p>}
        </div>
    )
}
export default Myaccordian