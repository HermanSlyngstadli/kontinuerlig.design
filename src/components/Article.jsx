import React from 'react'
import styled from 'styled-components'

const ArticleInner = styled.div`
    grid-column: span 3;
`

export const Article = ({ title, ingress, link }) => {
    return (
        <ArticleInner href={link}>
            <article>
                <img src="" alt="" />
                <h3>{title}</h3>
                <p>{ingress}</p>
                <span>LES MER</span>
            </article>
        </ArticleInner>
    )
}
