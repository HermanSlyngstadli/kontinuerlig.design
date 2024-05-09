import React from 'react'
import styled from 'styled-components'
import lineAnimation from '../images/animation.gif'

const LineAnimation = styled.img`
    width: 100%;
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
