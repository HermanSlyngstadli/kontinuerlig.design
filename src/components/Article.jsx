import React from 'react'
import styled from 'styled-components'

const ArticleInner = styled.a`
    width: 33%;
`


export const Article = ({title,ingress, link}) => {
    return (
        <ArticleInner href={link}>
            <article>
                <img src="" alt="" />
                <h1>{title}</h1>
                <p>{ingress}</p>
                <span>LES MER</span>
            </article>
        </ArticleInner>
    )
}