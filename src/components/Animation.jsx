import React from 'react'
import styled from 'styled-components'
import lineAnimation from '../images/animation.gif'

const LineAnimation = styled.img`
    position: relative;
    width: 100%;
    left: 0;
    @media screen and (max-width: 2100px) {
        left: -20px;
        width: 100vw;
    }
    @media screen and (max-width: 550px) {
        display: none;
    }
`

function Animation() {
    return (
        <div>
            <LineAnimation src={lineAnimation} alt="Your GIF" />
        </div>
    )
}

export default Animation
