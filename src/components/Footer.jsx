import React from 'react'
import styled from 'styled-components'
import logo from '../images/BekkLogo.svg'

const FooterWrapper = styled.div`
    display: 'flex';
    height: 4rem;
    font-size: 0.75rem;
`

const Grid = styled.div`
    margin: 328px auto 0;
    padding: 0 20px 64px;
    max-width: 2240px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-template-rows: 1fr;
    column-gap: 20px;
    row-gap: 48px;
`

const InnerGrid = styled.div`
    grid-column: span 8;
    max-width: 2240px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));
    grid-template-rows: 1fr;
    column-gap: 20px;
    row-gap: 48px;
`

const Footer = () => {
    return (
        <FooterWrapper>
            <Grid>
                <div style={{ gridColumn: 'span 4' }}>
                    <img src={logo} style={{ width: '4rem' }} />
                </div>
                <InnerGrid>
                    <div style={{ gridColumn: '1 / span 3' }}>
                        Oslo <br />
                        Akershusstranda 21 <br />
                        0150 Oslo
                    </div>
                    <div style={{ gridColumn: '4 / span 3' }}>
                        <a href="mailto:hei@bekk.no">hei@bekk.no</a>
                        <br />
                        <a href="tlf:+4723357700">+47 23 35 77 00</a>
                    </div>
                    <div style={{ gridColumn: '7 / span 2' }}>
                        <a href="#">Instagram</a>
                        <br />
                        <a href="#">LinkedIn</a>
                        <br />
                        <a href="#">Facebook</a>
                    </div>

                    <div style={{ gridColumn: '1 / span 3' }}>
                        Trondheim <br />
                        Kongens gate 16 <br />
                        7011 Trondheim
                    </div>
                    <div style={{ gridColumn: '4 / span 3' }}>
                        <a href="#">Nettstedkart</a>
                    </div>
                    <div style={{ gridColumn: '7 / span 2' }}>
                        <a href="#">Blogg</a>
                        <br />
                        <a href="#">Podcast</a>
                    </div>
                </InnerGrid>
            </Grid>
        </FooterWrapper>
    )
}

export default Footer
