import React from 'react'
import styled from 'styled-components'
import DotHeading from './DotHeading'
import Button from './Button'

const SurveyWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 12rem;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
`
const SurveyContent = styled.div`
    grid-column: 3 / span 6;
    @media screen and (max-width: 950px) {
        grid-column: 2 / span 10;
    }
    @media screen and (max-width: 550px) {
        grid-column: 1 / span 12;
    }
`

const Title = styled.div`
    grid-column: 1;
    font-size: 40px;
    margin-top: 3vh;
`
const Description = styled.p`
    grid-column: 1;
    font-size: 18px;
`

const Survey = () => {
    return (
        <SurveyWrapper>
            <SurveyContent>
                <DotHeading>Undersøkelsen</DotHeading>
                <Title>Barrierer for innsiktsarbeid </Title>
                <Description>
                    Omtrent halvparten av oss får ikke gjort den kvalitative eller kvantitative brukerinnsikten vi
                    opplever teamet har behov for. Hvilke barrierer står i veien for det?{' '}
                </Description>
                <Button href={'/undersokelsen'}>SE RESULTATENE </Button>
            </SurveyContent>
        </SurveyWrapper>
    )
}

export default Survey
