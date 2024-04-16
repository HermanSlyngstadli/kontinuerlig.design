import styled from 'styled-components'
import LayoutGrid from './LayoutGrid'

const SiteHeader = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
`

const ChildContainer = styled.div`
    margin-bottom: 3em;
    grid-column: 1 / span 12;
`

const Header = (props) => {
    return (
        <SiteHeader>
            <header>
                <InfoBar>
                    <span>Kontinuerlig.design</span>
                    <span>Bekk</span>
                </InfoBar>
                <LayoutGrid>
                    {props.children ? <ChildContainer>{props.children}</ChildContainer> : ''}
                    <Overline>{props.overline}</Overline>
                    <PageHeader>{props.title}</PageHeader>
                </LayoutGrid>
            </header>
        </SiteHeader>
    )
}

export default Header
