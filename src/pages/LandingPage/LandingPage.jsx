import React from 'react'
import styled from 'styled-components'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import InsightArticles from '../../components/InsightArticles'
import Survey from '../../components/Survey'
import Animation from '../../components/Animation'

const HeroSection = styled.div`
    height: 50vh;
    width: 60%;
    @media screen and (max-width: 500px) {
        width: 90%;
        height: 30vh;
    }
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
    margin-top: 0;
    font-size: clamp(2rem, 1.5rem + 1vw, 3rem);
    line-height: 1.4;
    font-feature-settings: 'ss01' on, 'ss05' on;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;

    /* Underline */
    &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 100%;
        height: 0.25em;
        background-color: var(--rebell);
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
                        Faget vårt er i endring. Kontinuerlig. Og de endringene vi ser i verden, i teknologibransjen og
                        i faget vårt akkurat nå, de er superviktige. Akkurat nå er det innsiktsarbeid som brenner.
                    </p>
                </HeroSection>
                <Animation />
                <Survey />
                <InsightArticles />
            </MainSection>
            <Footer />
        </>
    )
}
