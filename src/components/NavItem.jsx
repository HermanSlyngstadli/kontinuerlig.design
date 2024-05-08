import React, { useState } from 'react'
import styled from 'styled-components'
import NavArrow from './NavArrow'

const NavItemWrapper = styled.a`
    display: flex;
    align-items: center;
    color: var(--white);
    cursor: pointer;
    gap: 16px;
    padding: 0.25rem 0;
    min-height: 48px;
    &&:hover {
        color: var(--rebell);
        margin-right: '12px';
    }
    text-decoration: none;
`

const NavItemText = styled.span`
    display: inline-block;
    font-size: 1.5rem;
    font-size: clamp(2rem, 1.5rem + 1vw, 3rem);
    line-height: 1.4;
    font-feature-settings: 'ss01' on, 'ss05' on;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;

    @media (max-width: 900px) {
        font-size: 1rem;
    }
`

const NavItem = ({ children, href, ...props }) => {
    const [hover, setHover] = useState(false)
    const handleHover = () => {
        setHover(!hover)
    }

    return (
        <NavItemWrapper href={href} onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <NavItemText {...props}>{children}</NavItemText>
            {hover ? <NavArrow currentColor={'var(--rebell)'} /> : ''}
        </NavItemWrapper>
    )
}

export default NavItem
