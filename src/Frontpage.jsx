import React from 'react'
import styled from 'styled-components'
import logo from './images/BekkLogo.svg'
import {Article} from './components/Article'


const Header = styled.header`
    padding: 80px 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3em;
    font-size: 1em;
`

const Section = styled.section`
    padding: 80px 80px;
`

const Title = styled.h1`
`

const TitleUnderline = styled.h1`
    text-decoration: underline;
    text-decoration-color: #D4FF26
`

const Subtitle = styled.p`

`
const ArticleHeading = styled.h2`
    font-size: 48px;
`
const ArticleSubtitle = styled.h2`
    font-size: 24px;
`

const ArticleContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-between;
`


export const Frontpage = ({children}) => {
    return (
        <>
            <Header>
                <img className='bekkLogo' src={logo} width='56' height='51.95'></img>
                <span>Kontinuerlig design</span>
            </Header>
            <Section>
                <Title>Designfaget er i <TitleUnderline>kontinuerlig endring</TitleUnderline></Title>
                <Subtitle>Og hvis vi ikke skjerper oss nå, så går verden videre uten oss.</Subtitle>
            </Section>
            <Section>
                <ArticleHeading>Kom i gang med kontinuerlig innsikt</ArticleHeading>
                <ArticleSubtitle>Mindre innsikt oftere heller enn mye sjeldent.</ArticleSubtitle>
                <ArticleContainer>
                    <Article title='heihei' ingress='hva skjer' link='' />
                    <Article title='heihei' ingress='hva skjer' link='' />
                    <Article title='heihei' ingress='hva skjer' link=''/>
                    <Article title='heihei' ingress='hva skjer' link='' />
                    <Article title='heihei' ingress='hva skjer' link=''/>
                </ArticleContainer>
            </Section>

        </>
    )
}
