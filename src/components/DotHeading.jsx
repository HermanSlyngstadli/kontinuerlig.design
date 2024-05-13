import React from 'react'
import styled from 'styled-components'

const DotHeadingWrapper = styled.h2`
    font-size: clamp(1rem, 0.95rem + 0.25vw, 1.25rem);
    line-height: 1.4;
    font-feature-settings: 'ss01' on, 'ss05' on;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &&:before {
        content: '';
        width: 0.65rem;
        height: 0.65rem;
        background-color: currentcolor;
        border-radius: 100%;
        display: inline-block;
        margin-right: 0.6rem;
    }
`

const DotHeading = ({ children, ...props }) => {
    return <DotHeadingWrapper {...props}>{children}</DotHeadingWrapper>
}

export default DotHeading
