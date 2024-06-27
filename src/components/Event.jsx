import React from 'react'
import styled from 'styled-components'
import DotHeading from './DotHeading'
import Button from './Button'

const EventWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 12rem;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
`
const EventContent = styled.div`
    grid-column: 2 / span 6;
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

const Event = () => {
    return (
        <EventWrapper>
            <EventContent>
                <DotHeading>Event</DotHeading>
                <Title>Fagkveld: Designfaget i endring </Title>
                <Description>
                    Tirsdag 14. mai dedikerte vi en kveld til hvordan designfaget endrer seg gjennom kontinuerlig
                    innsiktsarbeid. 130 engasjerte deltagere fra bransjen fikk oppleve faglige innslag, god mat og
                    drikke og “open space” diskusjoner.{' '}
                </Description>
                <Button href={'https://blogg.bekk.no/designfaget-i-endring-e0779e41f5b4'}>LES OPPSUMMERING </Button>
            </EventContent>
        </EventWrapper>
    )
}

export default Event
