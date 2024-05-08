import React from 'react'

const NavArrow = ({ currentColor }) => {
    return (
        <svg
            width="48"
            height="48"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M11.0425 15.3845L12.1621 16.437L18.5811 9.99564L12.1543 3.59119L11.036 4.66473L15.7832 9.21066L1.01269 9.20167L1.01367 10.813L15.7842 10.822L11.0425 15.3845Z"
                fill={currentColor}
            ></path>
        </svg>
    )
}

export default NavArrow
