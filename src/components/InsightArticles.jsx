import React from 'react'
import styled from 'styled-components'
import articleImageOne from '../images/historiebaserteIntervjuer.jpg'
import articleImageTwo from '../images/innsiktsoyeblikk.jpg'
import articleImageThree from '../images/enGangIUka.jpg'
import articleImageFour from '../images/finneBrukere.jpg'
import articleImageFive from '../images/shouldveKnown.png'
import articleImageSix from '../images/dataInnsikt.jpeg'
import circle from '../images/circle.svg'
import { Link } from 'react-router-dom'

const ArticleWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
    grid-row-gap: 2rem;

    @media screen and (min-width: 530px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 850px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 1150px) {
        grid-template-columns: repeat(4, 1fr);
    }
`

const Article = styled.article`
    height: 45vh;
    position: relative;
    img {
        width: 100%;
        height: 65%;
        object-fit: cover;
        border-radius: 1%;
    }
    grid-column: ${({ index }) => (index % 3 === 0 ? '2 / span 1' : 'auto / span 1')};

    @media screen and (max-width: 1150px) {
        grid-column: ${({ index }) => (index % 2 === 0 ? '2 / span 1' : 'auto / span 1')};
    }
    @media screen and (max-width: 530px) {
        grid-column: 1 / span 1;
    }
`

const Title = styled.h3`
    font-size: 18px;
`

const CircleImage = styled.img`
    margin-right: 0.5rem;
`

const LesMer = styled.a`
    font-family: 'GT America Expanded';
    font-size: 14px;
    text-decoration: none;
    border: 1px solid #000;
    border-radius: 7px;
    padding: 0.1rem 0.2rem 0.1rem 0.2rem;
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 0;
`

const Intro = styled.div``

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
            <h2>Kontinuerlig innsiktsarbeid</h2>
            <ArticleWrapper>
                <Intro>
                    <Title>
                        <CircleImage src={circle} />
                        Artikler
                    </Title>{' '}
                    <br />
                    Innsikt og utforskning bør skje hyppig og kontinuerlig, samtidig som vi bygger.
                </Intro>
                {articles.map(({ img, title, link }, index) => (
                    <Article key={title} index={index}>
                        <img src={img} alt={title} />
                        <Title>{title}</Title>
                        <LesMer href={link}>
                            LES MER{' '}
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
                        </LesMer>
                    </Article>
                ))}
            </ArticleWrapper>
        </>
    )
}

export default InsightArticles
