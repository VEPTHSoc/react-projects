import React, { useState, useRef, useLayoutEffect} from 'react';
import './Result.scss';
const Result = ({children, style}) =>{
    const elRef= useRef(null);
    const topRef = useRef(0);

    const [top, setTop] = useState(null);
    const [dy, setDy] = useState(0);
    return(
        <li
            style={{
                ...style,
                '--dy': dy
            }}
            className ="result-item"
            ref ={elRef}>
                {children}
            </li>
    )
}
export default Result;