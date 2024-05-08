import React from 'react'
import styled from 'styled-components'
import circle from '../images/circle.svg'

const SurveyWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    @media screen and (max-width: 950px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 550px) {
        grid-template-columns: repeat(1, 1fr);
    }
`
const Intro = styled.div`
    grid-column: 1 / span 2;
    font-size: 18px;
    margin-top: 5vh;
`
const CircleImage = styled.img`
    margin-right: 0.5rem;
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
const Results = styled.button`
    grid-column-start: 1;
    font-family: 'GT America Expanded';
    font-size: 11px;
    background-color: var(--ild-lys);
    border: 1px solid #000;
    border-radius: 7px;
    display: inline-block;
    padding: 0.1rem 0.1rem 0.1rem 0.1rem;
    display: inline-block;
    white-space: nowrap;
    margin-top: 1vh;
    margin-bottom: 10vh;
    cursor: pointer;
`

const Survey = () => {
    return (
        <SurveyWrapper>
            <Intro>
                <CircleImage src={circle} />
                Undersøkelse
            </Intro>
            <Title>Barrierer for innsiktsarbeid </Title>
            <Description>
                69% av designere vi spurte føler ikke de gjør nok innsiktsarbeid i hverdagen. De vanligste barrierene er
                rekruttering, rammer og blabla.{' '}
            </Description>
            <Results>
                SE RESULTATENE AV SPØRREUNDERSØKELSEN{' '}
                <svg
                    width="20"
                    height="15"
                    viewBox="0 -3 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        d="M11.0425 15.3845L12.1621 16.437L18.5811 9.99564L12.1543 3.59119L11.036 4.66473L15.7832 9.21066L1.01269 9.20167L1.01367 10.813L15.7842 10.822L11.0425 15.3845Z"
                        fill="currentColor"
                    ></path>
                </svg>
            </Results>
        </SurveyWrapper>
    )
}

export default Survey
