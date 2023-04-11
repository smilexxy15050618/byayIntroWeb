/**
 * @description 动态数字
 */
import React, { useEffect, forwardRef, useRef,useState} from 'react';
import anime  from 'animejs';
const Number = (props:any, ref: any) => {
    const dynamic = useRef(null);
    useEffect(() => {
        anime({
            targets: dynamic.current, 
            innerHTML: [props.number],
            easing: 'easeInOutExpo',
            round: 1,
            duration: 2000
        });
    },[props.number]);
    return (
        props.number&&<span ref={dynamic}></span>
    );
};
  
export default forwardRef(Number);