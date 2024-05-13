import React from 'react'
import styled from 'styled-components'
import ButtonArrow from './ButtonArrow'

const ButtonWrapper = styled.a`
    font-family: 'GT America Expanded';
    font-size: 0.75rem;
    background-color: var(--ild-lys);
    border: 1px solid var(--natt);
    border-radius: 4px;
    background: transparent;
    border: 1px solid currentColor;
    padding: 4px 12px;
    width: max-content;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    color: inherit;
    text-decoration: none;

    &:hover {
        background: var(--rebell);
        color: var(--natt);
        border-color: var(--rebell);
    }
`

const DotText = ({ children, ...props }) => {
    return (
        <ButtonWrapper {...props}>
            {children}
            <ButtonArrow />
        </ButtonWrapper>
    )
}

export default DotText
