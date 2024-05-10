import React from 'react'
import styled from 'styled-components'
import logo from '../images/BekkLogo.svg'

const FooterWrapper = styled.footer`
    margin-top: 20vh;
    display: flex;
    justify-content: end;
    align-items: flex-start;
    flex-direction: row;
    gap: 3rem;
    padding: 2rem 20px;
    margin-top: 5rem;
    font-size: 0.75rem;
    @media screen and (max-width: 700px) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: start;
        margin-top: 3rem;
    }
`

const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-end;

    @media screen and (max-width: 700px) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: start;
    }
`

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContent>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0rem' }}>Kontakt oss</h3>
                <a href="mailto:hei@bekk.no">hei@bekk.no</a>
                <a href="tlf:+4723357700">+47 23 35 77 00</a>
            </FooterContent>
            <FooterContent>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0rem' }}>Mer fra oss</h3>
                <a href="https://www.instagram.com/livetibekk">Instagram</a>
                <a href="https://www.linkedin.com/company/bekk/">LinkedIn</a>
                <a href="https://blogg.bekk.no/">Blogg</a>
                <a href="https://open.spotify.com/show/6SVNY97zuPWcVdvE2FSNRL">Podkast</a>
            </FooterContent>
        </FooterWrapper>
    )
}

export default Footer
