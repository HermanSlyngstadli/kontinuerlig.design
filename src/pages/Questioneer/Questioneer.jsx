import React from 'react'
import styled from 'styled-components'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
// import jsonData from './Text.json'
import graf from '../../images/grafSurvey.png'

const MainSection = styled.main`
    position: relative;
    margin: 0 auto;
    padding: 174px 20px 0;
    max-width: 2240px;
    width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
        grid-column: 1 / span 2;
    }
`
const Finding = styled.div`
    grid-column: 4 / span 4;
    font-size: 18px;
    margin-top: 3rem;
    @media screen and (max-width: 1000px) {
        grid-column: 1 / span 2;
        margin-top: 1rem;
    }
`
const Title = styled.h1`
    grid-column: 1 / span 3;
    padding-right: 20px;
    @media screen and (max-width: 1000px) {
        grid-column: 1 / span 12;
    }
`

const Subtitle = styled.p`
    margin-top: 0;
    font-size: clamp(2rem, 1.5rem + 1vw, 3rem);
    font-family: 'GT America', Arial, Helvetica, sans-serif;
    line-height: 1.4;
    font-feature-settings: 'ss01' on, 'ss05' on;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    grid-column: 4 / span 5;
    @media screen and (max-width: 1000px) {
        grid-column: 1 / span 12;
        font-size: clamp(1.5rem, 1rem + 1vw, 2.5rem);
    }
`

const TitleUnderline = styled.span`
    position: relative;
    font-size: clamp(2rem, 1.5rem + 1vw, 3rem);
    line-height: 1.4;
    font-feature-settings: 'ss01' on, 'ss05' on;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;

    /* Underline */
    &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 0.15em;
        background-color: #d4ff26;
    }
`

const Intro = styled.div`
    grid-column: 4 / span 4;
    font-size: 18px;
    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
        grid-column: 1 / span 2;
    }
`
const FindingBigTitle = styled.p`
    font-size: 40px;
    margin-bottom: 1vh;
`
const FindingTitle = styled.p`
    font-size: 25px;
`
const Answers = styled.p`
    font-size: 18px;
    opacity: 0.65;
    margin: 0;
    padding-left: -2vh;
    padding-bottom: 1vh;
`
const List = styled.li`
    font-size: 18px;
`
const Quotes = styled.span`
    font-family: 'GT America Expanded';
    font-size: 1.5rem;
    margin: 4rem 0;
    grid-column: 2 / span 5;
    position: relative;
    color: #3c3c3c;

    /* Underline */
    &::after {
        content: '';
        position: absolute;
        left: -20px;
        top: 0;
        width: 0.3em;
        height: 100%;
        background-color: var(--rebell);
    }
    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
        grid-column: 1 / span 2;
        font-size: clamp(1rem, 1rem + 1vw, 2rem);
    }
`
const ImageElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
    gap: 16px;
    grid-column: 1 / span 3;
    font-size: 14px;
    margin-top: 2rem;
    margin-bottom: 2rem;
    @media screen and (max-width: 1000px) {
        grid-column: 1 / span 2;
        width: 80%;
    }
`
const Graf = styled.img`
    height: auto;
    width: 100%;
`

export const Questioneer = ({ children }) => {
    return (
        <>
            <Navigation />
            <MainSection>
                <Title>
                    <TitleUnderline>Barrierer</TitleUnderline> for innsiktsarbeid
                </Title>
                <Subtitle>Hvorfor gjør vi ikke innsiktsarbeid så ofte som vi kunne ønske?</Subtitle>
                <Intro>
                    <p>
                        Etter et dypdykk i dette spørsmålet har vi nå også hørt fra noen av dere i bransjen.
                        Innsiktsarbeid trengs for å ta gode beslutninger om hva vi skal lage, hvorfor og hvordan, og
                        aller helst fra både kvalitative og kvantitative data. Vi trenger også forståelse av domenet vi
                        jobber innenfor - som bl.a. det juridiske, tekniske og hvordan organisasjonen fungerer. I denne
                        undersøkelsen har vi snevret inn fokuset på kvalitativ og kvantitativ brukerinnsikt. Per 7. mai
                        2024 har 64 svart.
                    </p>
                    <p>
                        Vi kan ikke si at dette er resultater som viser bransjen, derfor viser vi antallet svar per
                        spørsmål - dette er bare en indikasjon på hva noen i bransjen opplever. Kort oppsummert:
                        hverdagene våre ser ganske forskjellige ut, og naturlig nok kjenner vi også da på ulike årsaker
                        til hvorfor vi ikke får gjennomført den brukerinnsikten vi har behov for! To tredjedeler av oss
                        jobber i en organisasjon som forstår hvorfor vi jobber brukersentrert (hurra!), men dessverre er
                        det hele en tredjedel som opplever at organisasjonen ikke forstår hvorfor vi trenger å snakke
                        med brukere (sukk).
                    </p>
                </Intro>
                <ImageElement>
                    <Graf
                        src={graf}
                        alt="Det siste halvåret - har dere gjort den kvalitative brukerinnsikten du opplever at teamet har behov for? 44 % svarer ja, 56 % svarer nei."
                    />
                    <figcaption style={{ fontSize: '14px' }}>
                        44 % svarer ja, og 56 % svarer nei på om de har gjort den kvalitatitve brukerinnsikten de
                        opplever at teamet har behov for det siste halvåret.
                    </figcaption>
                </ImageElement>
                <Finding>
                    <FindingBigTitle>Halvparten får ikke gjort nok kvalitativ brukerinnsikt</FindingBigTitle>
                    <p>
                        Men på den andre siden opplever også halvparten at de får gjort tilstrekkelig med kvalitativt
                        innsiktsarbeid (hurra!).
                    </p>
                </Finding>
                <Finding>
                    <FindingTitle>Ganske mange er dypt nede i byggefella</FindingTitle>
                    <p>
                        Noe av det folk trekker frem når de påpeker hvorfor de ikke får gjort nok kvalitativt
                        innsiktsarbeid er å få prioritert det. Folk har travle hverdager, så det er mange som ikke får
                        tid eller orker å prioritere utforskningen i hverdagen.
                    </p>
                    <ul>
                        <List>
                            Vi er opptatt med å bygge og lage ny funksjonalitet <br />
                            <Answers>19 svar av 37 mulige</Answers>
                        </List>
                        <List>
                            Det er travelt og det er tungt å engasjere seg selv og teamet til å sette i gang{' '}
                            <Answers>19 svar av 37 mulige</Answers>
                        </List>
                        <List>
                            Forarbeidet tar (for) mye tid - som rekruttering og intervjuguide{' '}
                            <Answers>11 svar av 37 mulige</Answers>
                        </List>
                    </ul>
                </Finding>
                <Quotes style={{ marginBottom: '5vh' }}>IKKE ROM I PRIO TIL Å SE FRAMOVER</Quotes>
                <Quotes>
                    FØLES SOM OM ET ANNET TEAM ALLEREDE HAR GJORT INNSIKTEN OG VI BARE MÅ TA DERES RESULTATER FOR GOD
                    FISK.
                </Quotes>
                <Finding>
                    <FindingTitle>
                        Mange peker på at det er lederne som ikke lar en få lov til å gjøre innsiktsarbeid
                    </FindingTitle>
                    <p>
                        Kan dette også være relatert til byggefella? At fokuset er på at vi bygger, bygger, bygger?
                        Hvordan vet vi hva vi skal bygge og hvordan uten denne utforskningen? Det kan se ut til at mange
                        fortsatt jobber i oppdelte faser, der det kvalitative innsiktsarbeidet i hovedsak skjer før en
                        starter byggingen. Hvor er det kontinuerlige arbeidet? Bygge, måle, lære?
                    </p>
                    <ul>
                        <List>
                            Leder ønsker ikke å prioritere det fordi andre oppgaver er viktigere.{' '}
                            <Answers>14 svar av 37 mulige</Answers>
                        </List>
                        <List>
                            Leder ønsker ikke å prioritere det fordi organisasjonen allerede har mye forståelse for
                            brukerne - brukerinnsikten er allerede hentet inn. <Answers>9 svar av 37 mulige</Answers>
                        </List>
                    </ul>
                </Finding>
                <Finding>
                    <FindingTitle>
                        For de fleste handler det ikke om kompetanse på kvalitativt innsiktsarbeid
                    </FindingTitle>
                    <p>
                        Hvis vi skal tenke over hva som er det reelle problemet å løse her, så kan det se ut som det
                        ikke er å bygge kompetanse som er det viktige - det handler gjerne mer om kulturen i
                        organisasjonen?
                    </p>
                    <ul>
                        <List>
                            Jeg kan det ikke godt nok og føler meg ikke trygg på å gjennomføre det.{' '}
                            <Answers>3 svar av 37 mulige</Answers>
                        </List>
                    </ul>
                </Finding>
                <Finding>
                    <FindingTitle>Få svarer at det er de juridiske barrierene som står i veien </FindingTitle>
                    <p>
                        Et litt overraskende funn da dette er noe vi har fått inntrykk av at noen kjenner veldig sterkt
                        på. Da kan det virke som det varierer fra organisasjon til organisasjon om det er juridiske og
                        personvernmessige hindrer i veien for å få gjennomført for eksempel et intervju.
                    </p>
                    <ul>
                        <List>
                            Juridiske barrierer: vurdering av personvern i rekruttering og innsamling av data.{' '}
                            <Answers>2 svar av 37 mulige</Answers>
                        </List>
                    </ul>
                </Finding>
                <ImageElement>
                    <Graf
                        src={graf}
                        alt="Det siste halvåret - har dere gjort den kvantitative brukerinnsikten du opplever at teamet har behov for? 44 % svarer ja, 56 % svarer nei."
                    />
                    <figcaption style={{ fontSize: '14px' }}>
                        44 % svarer ja, og 56 % svarer nei på om de har gjort den kvantitative brukerinnsikten de
                        opplever at teamet har behov for det siste halvåret.
                    </figcaption>
                </ImageElement>
                <Finding>
                    <FindingBigTitle>
                        Halvparten sier at de ikke får gjort nok kvantitativ brukerinnsikt
                    </FindingBigTitle>{' '}
                    <p>
                        På spørsmålet om en opplever at teamet har fått gjort den brukerinnsikten en har behov for, så
                        er tilfeldigvis antallet likt på kvalitativ og kvantitativ brukerinnsikt. Når en ser på svarene
                        så er det likevel ikke alltid de samme personene som svarer “ja” på begge. 16 av 64 svarer at de
                        får gjort det kvantitative innsiktsarbeidet de har behov for, men ikke det kvalitative.
                    </p>
                </Finding>
                <Finding>
                    <FindingTitle>
                        Også for kvantitativ brukerinnsikt oppgir mange årsaken om at en er travelt opptatt med å bygge
                        funksjonalitet{' '}
                    </FindingTitle>{' '}
                    <p>
                        Bygging har ikke noe verdi i seg selv, så hvordan kan vi vite om vi bygger det riktige uten å
                        analysere i etterkant. Hvordan kan vi gjøre det lavterskel å sjekke i etterkant av byggingen for
                        å se om det vi lager faktisk treffer på brukerbehov? Skaper den nye funksjonaliteten den
                        effekten vi forventet?
                    </p>
                    <ul>
                        <List>
                            Vi er opptatt med å bygge og lage ny funksjonalitet.<Answers>10 svar av 37 mulige</Answers>{' '}
                        </List>
                    </ul>
                </Finding>
                <Finding>
                    <FindingTitle>
                        Den viktigste årsaken er at teamet ikke har tilgang til et analyseverktøy
                    </FindingTitle>{' '}
                    <p>
                        Det er synd at det er mangel på verktøy som stopper oss i å få gjennomført analyser av brukere
                        og funksjonalitet. Kvantitative data kan en også få tak i fra databasen - men er det for
                        tungvindt og teknisk?
                    </p>
                    <ul>
                        <List>
                            Har ikke tilgang på analyseverktøy i teamet (f.eks. Amplitude, Google analytcs e.l.).{' '}
                            <Answers>16 svar av 37 mulige</Answers>
                        </List>
                    </ul>
                </Finding>
                <Finding>
                    <FindingTitle>
                        Mange trekker frem manglende kompetanse som en årsak - både som designer og i teamet generelt
                    </FindingTitle>{' '}
                    <p>
                        Har vi for lite erfaring og opplæring fra studiene i å dykke inn i kvantitative data og formidle
                        den? Det kan være komplisert å fremstille data på en riktig og fornuftig måte. Hvordan kan vi
                        som bransje øke forståelsen for metrikker, analyse av kvantitative data og CRO
                        (Konverteringsoptimalisering)?
                    </p>
                    <p>
                        Det er endel av de samme folka som svarer at en selv ikke har kompetansen og at teamet ikke har
                        kompetansen, og når det i tillegg er travelt, så kan det være vanskelig å engasjere teamet til å
                        komme i gang.
                    </p>
                    <ul>
                        <List>
                            Jeg kan det ikke godt nok og føler meg ikke trygg på å gjennomføre det.{' '}
                            <Answers>9 svar av 36 mulige</Answers>
                        </List>
                        <List>
                            Teamet mangler kompetansen til å sette opp målinger. <Answers>10 svar av 36 mulige</Answers>{' '}
                        </List>
                        <List>
                            Det er travelt og det er tungt å engasjere seg selv og teamet til å sette i gang.{' '}
                            <Answers>10 svar av 36 mulige</Answers>
                        </List>
                    </ul>
                </Finding>
                <Quotes>
                    TEAMET MÅLER ALT FOR MANGE PARAMETRE OG HAR IKKE NOE BEVISST FORHOLD TIL HVORDAN Å BRUKE DATAEN DE
                    SAMLER INN
                </Quotes>
                <Finding>
                    <FindingBigTitle>Noen refleksjoner på slutten</FindingBigTitle> <br />
                    <p>
                        Det er tydelig hvor forskjellige hverdager vi faktisk sitter i – der 20 % faktisk føler på at de
                        får gjort både den kvalitative og kvantitative brukerinnsikten de opplever at teamet har behov
                        for. Men mange andre kjenner på utfordringer rundt dette, og årsakene er varierende fra person
                        til person.
                    </p>
                </Finding>

                <Quotes>
                    DET ER SATT AV HVA MAN UANSETT SKAL UTVIKLE I LANG TID FREMOVER SÅ DET ER IRRELEVANT MED INNSIKT
                    ANNET ENN MÅLINGER OG TILBAKEMELDINGER
                </Quotes>
                <Finding>
                    <p>
                        En person trekker frem en erfaring rundt at det var greit å gjøre innsiktsarbeid, men når det
                        kom til stykket så ble ikke nye endringer faktisk prioritert og gjennomført. Hvis en jobber i en
                        organisasjon der en har planlagt så langt frem hva som skal lages, så er det jo ikke særlig rom
                        for noe utforskning eller analyse av det som er laget. Da handler det kanskje ikke så mye lenger
                        om en får gjort brukerinnsikt eller ikke. Det handler mer om hvordan hele organisasjonen jobber
                        etter lange planer og satte frister, uten rom for å endre planer etterhvert som man lærer.
                        Hvordan endrer vi da kulturen for å få til å jobbe mer smidig og med mindre risiko for å bygge
                        feil ting? Å jobbe mer produktorientert. Hvordan klarer vi å jobbe mer med kontinuerlig læring,
                        for slik å øke sannsynligheten for at vi bygger noe som brukerne faktisk har behov for?
                    </p>
                </Finding>
                <Finding>
                    <FindingTitle>Hva opplever du?</FindingTitle>
                    <p>
                        <a href="https://tally.so/r/wLdDW2">Ta spørreundersøkelsen her</a> - den er åpen i en stund
                        fremover.
                    </p>
                </Finding>
            </MainSection>
            <Footer />
        </>
    )
}
// const SurveyLink = styled.div`
//     display: flex;
//     align-items: center;
// `

// const FindingLink = styled.a`
//     margin-right: '20px';
// `
// export const Questioneer = () => {
//     const { title, intro, quote, link, findings } = jsonData

//     return (
//         <>
//             <Navigation />
//             <MainSection>
//                 <Title>{title}</Title>
//                 <Intro>{intro}</Intro>
//                 {findings.map((finding, index) => (
//                     <Finding key={console.log({ index })}>
//                         <FindingBigTitle>{finding.bigTitle}</FindingBigTitle>
//                         <FindingTitle>{finding.title}</FindingTitle>
//                         <SurveyLink>
//                             <FindingLink href="URL_TIL_SPØRREUNDERSØKELSE">{finding.link}</FindingLink>
//                             <p style={{ paddingLeft: '0.3rem' }}>{finding.linkContent}</p>
//                         </SurveyLink>
//                         <Finding>{finding.content}</Finding>
//                         <Quotes>{finding.quote}</Quotes>
//                     </Finding>
//                 ))}
//             </MainSection>
//             <Footer />
//         </>
//     )
// }

// export default Questioneer
