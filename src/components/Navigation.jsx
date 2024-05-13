import React from 'react'
import styled from 'styled-components'
//import NavItem from './NavItem'
import Logo from './Logo'

const Nav = styled.nav`
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: top;
    padding: 20px 20px;
    z-index: 3;
`

/*
const Menu = styled.div`
    display: ${(props) => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    min-height: 100%;
    background-color: ${(props) => (props.open ? 'var(--natt)' : 'var(--white)')};
    transition: background-color 0.3s ease-in-out;
    padding: 10rem 20px 20rem;
    z-index: 2;
    overscroll-behavior: contain;
    overflow: auto;
`
const MenuButton = styled.button`
    display: flex;
    align-items: flex-start;
    font-size: 1rem;
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    color: ${(props) => (props.open ? 'var(--white)' : 'var(--natt)')};
    transition: color 0.3s ease-in-out;
`*/

const Navigation = () => {
    /*
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }*/
    return (
        <div>
            <Nav>
                <a href="/">
                    <Logo color={'var(--natt)'} width="56" height="51.95" />
                </a>
                <a href="/undersokelsen">Undersøkelsen</a>
            </Nav>
        </div>
    )
}

export default Navigation

/*

<Menu open={menuOpen}>
    <NavItem href="/">Hva er kontinuerlig design?</NavItem>
    <NavItem href="/undersokelsen">Undersøkelsen</NavItem>
</Menu>

*/
