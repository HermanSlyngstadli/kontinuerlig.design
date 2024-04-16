import styled from 'styled-components'

const StyledGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 16px;
    padding: 0 64px;
    max-width: 1600px;
    margin: 0 auto;

    @media only screen and (max-width: 850px) {
        padding: 0 24px;
    }
`

function LayoutGrid({ children, ...props }) {
    return <StyledGridContainer {...props}>{children}</StyledGridContainer>
}
export default LayoutGrid
