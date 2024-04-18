// import React from 'react'
// import styled from 'styled-components'
// import LayoutGrid from './LayoutGrid'
// import GridItem from './GridItem'
// import logo from '../images/BekkLogo.svg';

// const Header = styled.header`
//     padding: 80px 80px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-bottom: 3em;
//     font-size: 1em;
// `

// const Section = styled.section`
//     padding: 80px 80px;
// `

// const Overline = styled.span`
//     grid-column: 1 / 11;
// `

// const PageHeader = styled.h1`
//     grid-column: 1 / 11;
//     width: calc(100vw - 48px);
// `

// const PageContent = styled.div`
//     position: relative;
//     width: 100%;
//     display: flex;
//     top: 0;
//     flex-direction: column;
// `

// export const Page = ({ children, title, location, headerHeight }) => {
//     return (
//         <>
//                 <Header>
//                     <img className='bekkLogo' src={logo} width='56' height='51.95'></img>
//                     <span>Kontinuerlig design</span>
//                 </Header>
//                 <Section>
//                     <Overline>{location}</Overline>
//                     <PageHeader>{title}</PageHeader>
//                 </Section>
//             <PageContent>{children}</PageContent>
//         </>
//     )
// }
