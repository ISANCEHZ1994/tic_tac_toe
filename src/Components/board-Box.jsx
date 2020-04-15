import React from './node_modules/react'

// Create Box component
export const Box = (props) => {
    return (
        <button className="board__box" onClick={props.onClick}>
            {props.value}
        </button>
    )
}
