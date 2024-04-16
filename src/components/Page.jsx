import React from 'react'
import styled from 'styled-components'
import LayoutGrid from './LayoutGrid'
import GridItem from './GridItem'

const IntroHeader = styled.header`
    height: ${(props) => props.headerHeight};
    display: flex;
    top: 0;
    flex-direction: column;
`

const InfoBar = styled.div`
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3em;
    font-size: 0.7em;
`

const Overline = styled.span`
    grid-column: 1 / 11;
`

const PageHeader = styled.h1`
    grid-column: 1 / 11;
    width: calc(100vw - 48px);
`

const PageContent = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    top: 0;
    flex-direction: column;
`

export const Page = ({ children, title, location, headerHeight }) => {
    return (
        <>
            <IntroHeader headerHeight={headerHeight}>
                <InfoBar>
                    <span>Bekk</span>
                    <span>Kontinuerlig design</span>
                </InfoBar>
                <LayoutGrid>
                    <GridItem small={12} large={7}>
                        <Overline>{location}</Overline>
                        <PageHeader>{title}</PageHeader>
                    </GridItem>
                </LayoutGrid>
            </IntroHeader>
            <PageContent>{children}</PageContent>
        </>
    )
}
