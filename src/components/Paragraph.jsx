import styled from 'styled-components'

const StyledParagraph = styled.p`
    margin-top: 32px;
    margin-bottom: 32px;
`

export const Paragraph = ({ children, ...props }) => {
    return <StyledParagraph {...props}>{children}</StyledParagraph>
}
