import React, { useState, useRef, useLayoutEffect} from 'react';
import Result from './Results/Result';
import './Results.scss';
const Results = ({data= []}) =>{
    const elRef = useRef(null);
    const [height,setHeight] = useState(null);
    useLayoutEffect(()=>{
        if(!elRef.current) return;
        const rect = elRef.current.getBoundingClientRect();
        setHeight(rect.height);
    });
    return(
        <ul className="results" ref={elRef} style={{ "--height": height}} data-height={height}>
            {data.map((item,i)=>{
                return (
                    <Result key={item} style={{
                        "--i": i
                    }}>
                        {item}
                    </Result>
                )
            })}
        </ul>
    )
}
export default Results;