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

export const WhatIsIt = ({ children }) => {
    return (
        <>
            <Navigation />
            <MainSection>
                <HeroSection>
                    <h1>Hva er kontinuerlig design?</h1>
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
