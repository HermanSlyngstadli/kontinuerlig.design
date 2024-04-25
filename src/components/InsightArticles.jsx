import React from 'react'
import styled from 'styled-components'
import { Article } from './Article'

const ArticleWrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(12, 1fr);
    grid-gap: 16px;
    width: 100%;
`

const InsightArticles = () => {
    return (
        <>
            <h2>Kontinuerlig innsiktsarbeid</h2>
            <ArticleWrapper></ArticleWrapper>
        </>
    )
}

export default InsightArticles
