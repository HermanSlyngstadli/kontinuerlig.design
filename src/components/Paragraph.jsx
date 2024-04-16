import styled from 'styled-components'

const StyledParagraph = styled.p`
    margin-top: 32px;
    margin-bottom: 32px;
`

export const Paragraph = ({ children, ...props }) => {
    return (
        <StyledParagraph
            {...props}
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
        >
            {children}
        </StyledParagraph>
    )
}
