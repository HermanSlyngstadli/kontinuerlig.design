import React from 'react'
import styled from 'styled-components'
import articleImageOne from '../images/historiebaserteIntervjuer.jpg'
import articleImageTwo from '../images/innsiktsoyeblikk.jpg'
import articleImageThree from '../images/enGangIUka.png'
import articleImageFour from '../images/finneBrukere.jpg'
import articleImageFive from '../images/shouldveKnown.png'
import articleImageSix from '../images/dataInnsikt.jpeg'
import DotText from './DotHeading'
import Button from './Button'

const ArticleWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1rem;
    grid-row-gap: 2rem;
`

const Article = styled.article`
    position: relative;
    margin-bottom: 16px;
    img {
        width: 100%;
        aspect-ratio: 3 / 2;
        object-fit: cover;
        border-radius: 1%;
    }

    grid-column: auto / span 4;
    @media screen and (max-width: 900px) {
        grid-column: auto / span 6;
    }
    @media screen and (max-width: 530px) {
        grid-column: 1 / span 12;
    }
`

const Title = styled.h3`
    font-size: 1.3rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    border-bottom: 1px solid var(--natt);
    border-top: 1px solid var(--natt);
`

const Intro = styled.p`
    grid-column: 1 / span 4;
    @media screen and (max-width: 900px) {
        grid-column: 1 / span 6;
    }
    @media screen and (max-width: 530px) {
        grid-column: 1 / span 12;
    }
`

const articles = [
    {
        img: articleImageOne,
        title: 'Kraften i historiebaserte intervjuer',
        ingress: 'Hvilke intervjuer med brukere har du fått mest ut av, og hvilke har du sterkest i minnet?',
        link: 'https://blogg.bekk.no/kraften-i-historiebaserte-intervjuer-2e21c0c40748',
    },
    {
        img: articleImageTwo,
        title: 'Innsiktsøyeblikket: Gullet i kvalitativ research',
        ingress: 'Gullet i kvalitativ research',
        link: 'https://blogg.bekk.no/innsikts%C3%B8yeblikket-gullet-i-kvalitativ-research-84a1036abccc',
    },
    {
        img: articleImageThree,
        title: 'Minst en gang i uka',
        ingress: 'Lenger tekst her',
        link: 'https://blogg.bekk.no/minst-en-gang-i-uka-7a835f12ad1f',
    },
    {
        img: articleImageFour,
        title: 'Vanskelig å finne brukere å snakke med? La deg inspirere av disse designerne',
        ingress: 'Lenger tekst her',
        link: 'https://blogg.bekk.no/vanskelig-%C3%A5-finne-brukere-%C3%A5-snakke-med-la-deg-inspirere-av-disse-designerne-ac6f72f7bb7a',
    },
    {
        img: articleImageFive,
        title: 'Five things we wish we knew about working as a UX designer before we started',
        ingress: 'Lenger tekst her',
        link: 'https://www.bekk.christmas/post/2020/2/five-things-we-wish-we-knew-about-working-as-a-ux-designer-before-we-started',
    },
    {
        img: articleImageSix,
        title: 'Data og brukerinnsikt',
        ingress: 'Lenger tekst her',
        link: 'https://www.bekk.christmas/post/2022/15/data-og-brukerinnsikt',
    },
]

const InsightArticles = () => {
    return (
        <>
            <ArticleWrapper>
                <Intro>
                    <DotText>Artikler</DotText>
                    Innsikt og utforskning bør skje hyppig og kontinuerlig, samtidig som vi bygger.
                </Intro>
            </ArticleWrapper>
            <ArticleWrapper>
                {articles.map(({ img, title, link }, index) => (
                    <Article key={title} index={index}>
                        <img src={img} alt={title} />
                        <Title>{title}</Title>
                        <Button href={link}>LES MER</Button>
                    </Article>
                ))}
            </ArticleWrapper>
        </>
    )
}

export default InsightArticles
