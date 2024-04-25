import React from 'react'
import styled from 'styled-components'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'

const HeroSection = styled.div`
    height: 100vh;
    width: 100%;
`

const MainSection = styled.main`
    position: relative;
    margin: 0 auto;
    padding: 174px 20px 0;
    max-width: 2240px;
    width: 100%;
    box-sizing: border-box;
`

const TitleUnderline = styled.span`
    position: relative;

    /* Underline */
    &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 0.15em;
        background-color: #d4ff26;
    }
`

export const LandingPage = ({ children }) => {
    return (
        <>
            <Navigation />
            <MainSection>
                <HeroSection>
                    <h1>
                        Vi må <TitleUnderline>snakke</TitleUnderline> om designfaget
                    </h1>
                    <p>
                        Faget vårt er i endring. Kontinuerlig. Og de endringene vi ser i verden, i bransjen og i faget
                        vårt akkurat nå, de er superviktige. Så viktige at vi må sørge for å holde følge.
                    </p>
                </HeroSection>
            </MainSection>
            <Footer />
        </>
    )
}
