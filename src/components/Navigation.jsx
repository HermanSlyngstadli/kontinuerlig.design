import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../images/BekkLogo.svg'

const Nav = styled.nav`
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: top;
    padding: 20px 20px;
    z-index: 3;
`

const Menu = styled.div`
    display: ${(props) => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;
    color: #000;
    padding: 10rem 20px 20rem;
    z-index: 2;
`

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <div>
            <Nav>
                <a href="/">
                    <img className="bekkLogo" src={logo} width="56" height="51.95" />
                </a>
                <button style={{ fontSize: '0.75rem' }} onClick={() => toggleMenu()}>
                    Meny
                </button>
            </Nav>
            <Menu open={menuOpen}>
                <a href="/">Hjem</a>
                <a href="/hva-er-kontinuerlig-design">Hva er kontinuerlig design</a>
            </Menu>
        </div>
    )
}

export default Navigation
