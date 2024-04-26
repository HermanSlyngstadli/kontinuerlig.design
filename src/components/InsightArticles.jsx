import React from 'react'
import styled from 'styled-components'
import { Article } from './Article'
import image from '../images/coverimage.jpg'

const ArticleWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 1fr;
    grid-gap: 25px;
    width: 100%;

    @media screen and (min-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 800px) {
        grid-template-columns: repeat(4, 1fr);
    }
`

const Title = styled.h3`
    font-size: 24px;
    height: 10%;
`
const Ingress = styled.p`
    font-size: 20px;
`

const articles = [
    {
        img: image,
        title: 'Kraften i historiebaserte intervjuer',
        ingress: 'Lenger tekst her',
        link: 'https://blogg.bekk.no/kraften-i-historiebaserte-intervjuer-2e21c0c40748',
    },
    {
        img: image,
        title: 'Innsiktsøyeblikket: Gullet i kvalitativ research',
        ingress: 'Lenger tekst her',
        link: 'https://example.com',
    },
    {
        img: image,
        title: 'Hei 3',
        ingress: 'Lenger tekst her',
        link: 'https://example.com',
    },
    {
        img: image,
        title: 'Innsiktsøyeblikket: Gullet i kvalitativ research',
        ingress: 'Lenger tekst her',
        link: 'https://example.com',
    },
    {
        img: image,
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
                    <article>
                        <img src={img} alt="" object-fit="cover" width="100%" />
                        <Title>{title}</Title>
                        <Ingress>{ingress}</Ingress>
                        <a href={link}>LES MER</a>
                    </article>
                ))}
            </ArticleWrapper>
        </>
    )
}

export default InsightArticles
