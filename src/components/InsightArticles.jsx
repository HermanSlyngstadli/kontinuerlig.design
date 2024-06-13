import React from 'react'
import styled from 'styled-components'
import articleImageOne from '../images/historiebaserteIntervjuer.jpg'
import articleImageTwo from '../images/innsiktsoyeblikk.jpg'
import articleImageThree from '../images/enGangIUka.png'
import articleImageFour from '../images/finneBrukere.jpg'
import articleImageFive from '../images/shouldveKnown.png'
import articleImageSix from '../images/dataInnsikt.jpeg'
import kontdesignimg from '../images/kontinuerligdesignarticlebg.webp'
import innsiktsfletta from '../images/innsiktsfletta.png'
import DotText from './DotHeading'
import ButtonArrow from './ButtonArrow'

const ArticleWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1rem;
    grid-row-gap: 3rem;
`

const Article = styled.article`
    position: relative;
    margin-bottom: 16px;
    img {
        width: 100%;
        aspect-ratio: 3 / 2;
        object-fit: cover;
        border-radius: 1%;
        transition: filter 0.3s ease-in-out;
    }
    svg {
        margin-left: 0;
        transition: margin-left 0.2s ease-in-out;
    }

    &:hover {
        img {
            filter: grayscale(100%);
        }

        svg {
            margin-left: 0.2rem;
        }
    }

    grid-column: ${(props) => (props.index % 3 === 0 ? '4 / span 3' : 'auto / span 3')};

    @media screen and (max-width: 900px) {
        grid-column: 1 / span 12;
    }
    @media screen and (max-width: 530px) {
        grid-column: 1 / span 12;
    }
`

const ArticleLink = styled.a`
    text-decoration: none;
`

const ArticleArrow = styled.span`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    margin: 0;
    padding: 0.25rem 0;
    font-size: 1rem;
    line-height: 1.2;
    border-bottom: 1px solid var(--natt);
`

const Title = styled.h3`
    font-size: 1.3rem;
    padding-top: 0.15rem;
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: 1px solid var(--natt);
    border-top: 1px solid var(--natt);
`

const Intro = styled.div`
    grid-column: 1 / span 3;
    @media screen and (max-width: 900px) {
        grid-column: 1 / span 6;
    }
    @media screen and (max-width: 530px) {
        grid-column: 1 / span 12;
    }
`

const articles = [
    {
        img: innsiktsfletta,
        title: 'Produktutforsking 101',
        ingress: 'Hvilke intervjuer med brukere har du fått mest ut av, og hvilke har du sterkest i minnet?',
        link: 'https://blogg.bekk.no/produktutforsking-101-prosessen-av-%C3%A5-finne-det-som-er-verdt-%C3%A5-bygge-f578975b274e',
    },
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
    {
        img: kontdesignimg,
        title: 'Kontinuerlig design',
        ingress: 'Lenger tekst her',
        link: 'https://blogg.bekk.no/kontinuerlig-design-5996f9786e1c',
    },
]

const InsightArticles = () => {
    return (
        <>
            <ArticleWrapper style={{ marginBottom: '16px' }}>
                <Intro>
                    <DotText>Artikler</DotText>
                    Innsikt og utforskning bør skje hyppig og kontinuerlig, samtidig som vi bygger.
                </Intro>
                {/* </ArticleWrapper>
            <ArticleWrapper> */}
                {articles.map(({ img, title, link }, index) => (
                    <Article key={title} index={index}>
                        <ArticleLink href={link}>
                            <img src={img} alt={title} style={{ marginBottom: '0.65rem' }} />
                            <Title>{title}</Title>
                            <ArticleArrow>
                                Les mer <ButtonArrow height="1.3rem" width="1.5rem" />
                            </ArticleArrow>
                        </ArticleLink>
                    </Article>
                ))}
            </ArticleWrapper>
        </>
    )
}

export default InsightArticles
