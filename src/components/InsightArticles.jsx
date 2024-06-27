import React from 'react'
import styled from 'styled-components'
import articleImageOne from '../images/historiebaserteIntervjuer.jpg'
import articleImageTwo from '../images/innsiktsoyeblikk.jpg'
import articleImageThree from '../images/enGangIUka.png'
import articleImageFour from '../images/finneBrukere.jpg'
import articleImageFive from '../images/shouldveKnown.png'
import articleImageSix from '../images/dataInnsikt.jpeg'
import kontdesignimg from '../images/kontinuerligdesignarticlebg.webp'
import forKANBANnet from '../images/forKANBANnet.png'
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
    margin-top: 0.5rem;
    padding: 0.25rem 0;
    font-size: 1rem;
    line-height: 1.2;
    border-top: 1px solid var(--natt);
    border-bottom: 1px solid var(--natt);
`

const Title = styled.h3`
    font-size: 1.1rem;
    padding-top: 0.15rem;
    padding-bottom: 0;
    margin-bottom: 0;
    border-top: 1px solid var(--natt);
`
const Tag = styled.div`
    display: inline-block;
    font-family: 'GT America Expanded';
    background-color: var(--rebell);
    font-size: 0.6rem;
    /* border: 1px solid var(--natt); */
    border-radius: 30px;
    margin-top: 0.35rem;
    padding: 0.3rem 0.6rem 0.3rem 0.6rem;
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
        tagtxt: 'PROSESS',
        link: 'https://blogg.bekk.no/produktutforsking-101-prosessen-av-%C3%A5-finne-det-som-er-verdt-%C3%A5-bygge-f578975b274e',
    },
    {
        img: articleImageOne,
        title: 'Kraften i historiebaserte intervjuer',
        tagtxt: 'KONTINUERLIG INNSIKT',
        link: 'https://blogg.bekk.no/kraften-i-historiebaserte-intervjuer-2e21c0c40748',
    },
    {
        img: articleImageThree,
        title: 'Minst en gang i uka',
        tagtxt: 'KONTINUERLIG INNSIKT',
        link: 'https://blogg.bekk.no/minst-en-gang-i-uka-7a835f12ad1f',
    },
    {
        img: articleImageTwo,
        title: 'Innsiktsøyeblikket: Gullet i kvalitativ research',
        tagtxt: 'KONTINUERLIG INNSIKT',
        link: 'https://blogg.bekk.no/innsikts%C3%B8yeblikket-gullet-i-kvalitativ-research-84a1036abccc',
    },

    {
        img: articleImageFour,
        title: 'Vanskelig å finne brukere å snakke med? La deg inspirere av disse designerne',
        tagtxt: 'KONTINUERLIG INNSIKT',
        link: 'https://blogg.bekk.no/vanskelig-%C3%A5-finne-brukere-%C3%A5-snakke-med-la-deg-inspirere-av-disse-designerne-ac6f72f7bb7a',
    },
    {
        img: articleImageFive,
        title: 'Five things we wish we knew about working as a UX designer before we started',
        tagtxt: 'PROSESS',
        link: 'https://www.bekk.christmas/post/2020/2/five-things-we-wish-we-knew-about-working-as-a-ux-designer-before-we-started',
    },
    {
        img: articleImageSix,
        title: 'Data og brukerinnsikt',
        tagtxt: 'KONTINUERLIG INNSIKT',
        link: 'https://www.bekk.christmas/post/2022/15/data-og-brukerinnsikt',
    },
    {
        img: kontdesignimg,
        title: 'Kontinuerlig design',
        tagtxt: 'PROSESS',
        link: 'https://blogg.bekk.no/kontinuerlig-design-5996f9786e1c',
    },
    {
        img: forKANBANnet,
        title: 'En tavle til å bli forKANBANnet av',
        tagtxt: 'PROSESS',
        link: 'https://www.bekk.christmas/post/2023/19/forkanbannede-tavle',
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
                {articles.map(({ img, title, link, tagtxt }, index) => (
                    <Article key={title} index={index}>
                        <ArticleLink href={link}>
                            <img src={img} alt={title} style={{ marginBottom: '0.65rem' }} />
                            <Title>{title}</Title>
                            <Tag>{tagtxt}</Tag>
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
