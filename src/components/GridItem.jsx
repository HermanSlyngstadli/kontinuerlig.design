import styled from 'styled-components'

const Item = styled.div`
    margin-bottom: 3rem;
    grid-column: ${(props) => '1 / ' + (props.large + 1)};
    @media (max-width: 850px) {
        grid-column: ${(props) => '1 / ' + (props.small + 1)};
    }
`

function GridItem({ children, large, small, style }) {
    return (
        <Item large={large} small={small} style={style}>
            {children}
        </Item>
    )
}

export default GridItem
