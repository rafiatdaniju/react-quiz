import React from 'react'


const CustomBtn = (props) => {
    return (
        <>
            <button className={props.cname}>{props.children}</button>
        </>
    )
}
export default CustomBtn