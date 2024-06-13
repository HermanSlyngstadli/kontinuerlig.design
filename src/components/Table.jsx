import React from 'react'
import styled from 'styled-components'

const StyledTable = styled.table`
    margin-top: 5vh;
    margin-bottom: 10vh;
    border-collapse: collapse;
    width: 100%;
    color: --var(natt);
    th,
    td {
        border: 2px solid #aeb7ab;
        padding: 15px;
        text-align: left;
        font-size: 16px;
    }
    th {
        background-color: #d9dccf;
        border: 2px solid #aeb7ab;
        font-weight: 500;
        font-size: 16px;
    }
    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`

const Tabell = ({ data, headers }) => {
    return (
        <div>
            <StyledTable>
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((val, key) => {
                        return (
                            <tr key={key}>
                                {Object.values(val).map((value, index) => (
                                    <td key={index}>{value}</td>
                                ))}
                            </tr>
                        )
                    })}
                </tbody>
            </StyledTable>
        </div>
    )
}

export default Tabell
