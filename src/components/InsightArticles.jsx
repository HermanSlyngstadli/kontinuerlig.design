import React from 'react'
import styled from 'styled-components'
//import { Article } from './Article'
import articleImageOne from '../images/historiebaserteIntervjuer.jpg'
import articleImageTwo from '../images/innsiktsoyeblikk.jpg'
import { Link } from 'react-router-dom'

const ArticleWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 2rem;

    @media screen and (min-width: 480px) {
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
    height: 50vh;

    img {
        width: 100%;
        height: 50%;
        object-fit: cover; /* Ensures the image covers the entire container */
    }
`

const Title = styled.h3`
    font-size: 20px;
    height: 2rem;
`
const Ingress = styled.p`
    font-size: 16px;
    height: 5rem;
`
const LesMer = styled.a`
    text-decoration: none;
    font-family: 'GT America Expanded';
    font-size: 16px;
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
        ingress:
            'For å få tid til mer kvalitativt innsiktsarbeid i den travle, smidige produktutviklingshverdagen: Fokuser på innsiktsøyeblikket!',
        link: 'https://blogg.bekk.no/innsikts%C3%B8yeblikket-gullet-i-kvalitativ-research-84a1036abccc',
    },
    {
        img: articleImageOne,
        title: 'Hei 3',
        ingress: 'Lenger tekst her',
        link: 'https://example.com',
    },
    {
        img: articleImageOne,
        title: 'Innsiktsøyeblikket: Gullet i kvalitativ research',
        ingress: 'Lenger tekst her',
        link: 'https://example.com',
    },
]

const InsightArticles = () => {
    return (
        <>
            <h2>Kontinuerlig innsiktsarbeid</h2>
            <ArticleWrapper>
                {articles.map(({ img, title, ingress, link }) => (
                    <Article key={title}>
                        <img src={img} alt={title} />

                        <Title>{title}</Title>
                        <Ingress>{ingress}</Ingress>
                        <LesMer href={link}>
                            LES MER{' '}
                            <svg
                                width="20"
                                height="15"
                                viewBox="0 0 20 20"
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
