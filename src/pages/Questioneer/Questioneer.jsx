import React from 'react'
import styled from 'styled-components'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
// import jsonData from './Text.json'
import graf from '../../images/grafSurvey.png'
import NavArrow from '../../components/NavArrow'
import Tabell from '../../components/Table'

const MainSection = styled.main`
    position: relative;
    margin: 0 auto;
    padding: 80px 20px 0;
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
    padding-right: 5rem;
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
    font-size: 1.3rem;
    margin: 4rem 0;
    grid-column: 3 / span 6;
    padding-left: 1rem;
    position: relative;
    color: var(--natt);
    font-style: italic;

    /* Underline */
    &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 0.3rem;
        height: 100%;
        background-color: #cbb29c;
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
    padding: 0 5rem;
    gap: 16px;
    grid-column: 1 / span 3;
    font-size: 14px;
    margin-top: 2rem;
    margin-bottom: 2rem;
    @media screen and (max-width: 1000px) {
        grid-column: 1 / span 2;
    }
`
const Graf = styled.img`
    height: auto;
    width: 100%;
`

const BackLink = styled.a`
    display: block;
    margin-bottom: 5rem;
    width: 100%;
    grid-column: 1 / span 6;

    @media screen and (max-width: 700) {
        margin-bottom: 2rem;
        grid-column: 1 / span 2;
    }
`

export const Questioneer = ({ children }) => {
    const data1 = [
        {
            column1: 'Det er travelt og det er tungt å engasjere seg selv og teamet til å sette i gang',
            column2: '51 %',
        },
        { column1: 'Vi er opptatt med å bygge og lage ny funksjonalitet', column2: '51 %' },
        { column1: 'Leder ønsker ikke å prioritere det fordi andre oppgaver er viktigere', column2: '38 %' },
        { column1: 'Forarbeidet tar (for) mye tid - som rekruttering og intervjuguide', column2: '30 %' },
        { column1: 'For vanskelig å rekruttere relevante brukere', column2: '24 %' },
        { column1: 'De andre i teamet ønsker ikke å prioritere det', column2: '24 %' },
        {
            column1:
                'Leder ønsker ikke å prioritere det fordi organisasjonen allerede har mye forståelse for brukerne - brukerinnsikten er allerede hentet inn',
            column2: '24 %',
        },
        { column1: 'Etterarbeidet tar (for) mye tid - som analyse og dokumentasjon', column2: '22 %' },
        { column1: 'Jeg kan det ikke godt nok og føler meg ikke trygg på å gjennomføre det', column2: '8 %' },
        {
            column1: 'Juridiske barrierer: vurdering av personvern i rekruttering og innsamling av data',
            column2: '5 %',
        },
    ]
    const headers1 = [
        'Hva er årsaken til at dere ikke får gjort mer kvalitativt innsiktsarbeid i hverdagen?',
        'Prosent',
    ]
    const data2 = [
        {
            column1: 'Har ikke tilgang på analyseverktøy i teamet (f.eks. Amplitude, Google analytcs e.l.)',
            column2: '44 %',
        },
        { column1: 'Teamet mangler kompetansen til å sette opp målinger', column2: '28 %' },
        {
            column1: 'Det er travelt og det er tungt å engasjere seg selv og teamet til å sette i gang',
            column2: '28 %',
        },
        { column1: 'Vi er opptatt med å bygge og lage ny funksjonalitet', column2: '28 %' },
        { column1: 'Jeg kan det ikke godt nok og føler meg ikke trygg på å gjennomføre det', column2: '25 %' },
        { column1: 'Vi har ikke lansert noe, så vi har ikke tilgang til kvantitative data', column2: '22 %' },
        {
            column1:
                'Leder ønsker ikke å prioritere det fordi organisasjonen allerede har mye forståelse for brukerne - brukerinnsikten er allerede hentet inn',
            column2: '8 %',
        },
        { column1: 'Leder ønsker ikke å prioritere det fordi andre oppgaver er viktigere', column2: '8 %' },
        { column1: 'De andre i teamet ønsker ikke å prioritere det', column2: '6 %' },
    ]
    const headers2 = [
        'Hva er årsaken til at dere ikke får gjort mer kvantitativt innsiktsarbeid i hverdagen?',
        'Prosent',
    ]

    return (
        <>
            <Navigation />
            <MainSection>
                <BackLink href="/">
                    <NavArrow
                        currentColor={'var(--natt)'}
                        height="1rem"
                        width="1.3rem"
                        style={{ marginRight: '0.5rem', transform: 'rotate(180deg)' }}
                    />
                    Tilbake til forsiden
                </BackLink>
                <Title>
                    <TitleUnderline>Barrierene</TitleUnderline> for innsiktsarbeid
                </Title>
                <Subtitle>Hvorfor gjør vi ikke innsiktsarbeid så ofte som vi ønsker?</Subtitle>
                <Intro>
                    <p>
                        Det er det brennhete spørsmålet vi trenger svar på. Svar vi kan bruke som argumenter for å gjøre
                        mer innsiktsarbeid. Svar som lar oss formidle hvordan innsiktsarbeid hjelper selskaper å ta
                        bedre beslutninger om hva de skal lage, hvordan og, ikke minst, hvorfor. <br />
                        Vi trenger også en bredere forståelse av domenene vi jobber i, blant annet det juridiske,
                        tekniske og hvordan organisasjoner fungerer, men i denne spørreundersøkelsen fokuserer vi på
                        kvalitativ og kvantitativ brukerinnsikt.
                    </p>
                    <p>
                        Per 7. mai har 64 svart på undersøkelsen. Tusen takk til alle som har svart på undersøkelsen så
                        langt 💛 Hvis du vil ta undersøkelsen setter vi stor pris på det. Undersøkelsen finner du{' '}
                        <a href="https://tally.so/r/wLd1qy">her.</a>
                    </p>
                    <br />
                    <FindingTitle>Superkort oppsummert</FindingTitle>
                    <p>
                        Hverdagene våre ute i de tusen produkthjem er ganske forskjellige. Det betyr et stort spenn av
                        grunner og årsaker til hvorfor vi ikke får gjennomført brukerinnsikten vi har behov for! To
                        tredjedeler jobber i en organisasjon som forstår hvorfor vi setter brukerens behov først
                        (hurra!), men dessverre opplever en tredjedel at organisasjonen ikke forstår hvorfor vi trenger
                        å snakke med brukerne (hjertesukk).
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
                        Men den andre halvparten (28 av 64) sier de får gjort tilstrekkelig med kvalitativt
                        innsiktsarbeid 🎉
                    </p>
                </Finding>
                <Finding>
                    <FindingTitle>Ganske mange er dypt nede i byggefella</FindingTitle>
                    <p>
                        Dårlig tid er en faktor mange trekker frem når de peker på hvorfor de ikke får gjort nok
                        kvalitativt innsiktsarbeid. Folk har travle hverdager, så det er mange som verken har tid eller
                        ork til å prioritere utforskning i arbeidstiden.
                    </p>
                    <ul>
                        <List>
                            Vi er opptatt med å bygge og lage ny funksjonalitet <br />
                            <Answers>19 svar av 36 mulige</Answers>
                        </List>
                        <List>
                            Det er travelt og det er tungt å engasjere seg selv og teamet til å sette i gang{' '}
                            <Answers>19 svar av 36 mulige</Answers>
                        </List>
                        <List>
                            Forarbeidet tar (for) mye tid – som rekruttering og intervjuguide{' '}
                            <Answers>11 svar av 36 mulige</Answers>
                        </List>
                    </ul>
                </Finding>
                <Quotes style={{ marginBottom: '5vh' }}>«Ikke rom i prio til å se framover»</Quotes>
                <Quotes>
                    «Føles som om et annet team allerede har gjort innsikten og vi bare må ta deres resultater for god
                    fisk»
                </Quotes>
                <Finding>
                    <FindingTitle>Lederne lar oss ikke gjøre innsiktsarbeid</FindingTitle>
                    <p>
                        Kan dette også være relatert til byggefella? At fokuset er på at vi bygger, bygger, bygger?
                        Hvordan vet vi hva vi skal bygge og hvordan uten denne utforskningen? Det kan se ut til at mange
                        fortsatt jobber i oppdelte faser, der det kvalitative innsiktsarbeidet i hovedsak skjer før en
                        starter byggingen. Hvor er det kontinuerlige arbeidet? Bygge, måle, lære?
                    </p>
                    <ul>
                        <List>
                            Leder ønsker ikke å prioritere det fordi andre oppgaver er viktigere.{' '}
                            <Answers>14 svar av 36 mulige</Answers>
                        </List>
                        <List>
                            Leder ønsker ikke å prioritere det fordi organisasjonen allerede har mye forståelse for
                            brukerne - brukerinnsikten er allerede hentet inn. <Answers>9 svar av 36 mulige</Answers>
                        </List>
                    </ul>
                </Finding>
                <Finding>
                    <FindingTitle>
                        For de fleste handler det ikke om lav kompetanse på kvalitativt innsiktsarbeid
                    </FindingTitle>
                    <p>
                        Med andre ord er det å bygge kompetanse på innsiktsarbeid et problem vi ikke trenger å løse. Det
                        handler heller mer om å endre kulturen i organisasjonen.
                    </p>
                    <ul>
                        <List>
                            Jeg kan det ikke godt nok og føler meg ikke trygg på å gjennomføre det.{' '}
                            <Answers>3 svar av 36 mulige</Answers>
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
                            <Answers>2 svar av 36 mulige</Answers>
                        </List>
                    </ul>
                    <Tabell data={data1} headers={headers1} />
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
                        er tilfeldigvis antallet likt på kvalitativ og kvantitativ brukerinnsikt. Men hvis vi ser
                        nærmere på svarene, er det ikke alltid de samme personene som svarer “ja” på begge. 16 av 64
                        svarer at de får gjort det kvantitative innsiktsarbeidet de har behov for, men ikke det
                        kvalitative.
                    </p>
                </Finding>
                <Finding>
                    <FindingTitle>«Har ikke tid til innsiktsarbeid, jeg må bygge» </FindingTitle>{' '}
                    <p>
                        Også for kvantitativ brukerinnsikt oppgir mange at de er opptatt med å bygge funksjonalitet som
                        årsaken til at de ikke får gjort innsiktsarbeid. Bygging har ikke noe verdi i seg selv, så
                        hvordan kan vi vite om vi bygger det riktige uten å analysere i etterkant? Hvordan kan vi senke
                        terskelen for å sjekke i etterkant av byggingen om det vi lager faktisk treffer brukerens behov?
                        Skaper den nye funksjonaliteten den effekten vi forventet?
                    </p>
                    <ul>
                        <List>
                            Vi er opptatt med å bygge og lage ny funksjonalitet.<Answers>10 svar av 36 mulige</Answers>{' '}
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
                            <Answers>16 svar av 36 mulige</Answers>
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
                        Det er en del av de samme folka som svarer at en selv ikke har kompetansen og at teamet ikke har
                        kompetansen. Og når det i tillegg er travelt, så kan det være vanskelig å engasjere teamet til å
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
                    «Teamet måler alt for mange parametre og har ikke noe bevisst forhold til hvordan å bruke dataen de
                    samler inn»
                </Quotes>
                <Finding>
                    <Tabell data={data2} headers={headers2} />
                    <FindingBigTitle>Noen refleksjoner på slutten</FindingBigTitle> <br />
                    <p>
                        Det er tydelig hvor forskjellige hverdager våre er! 20 % opplever at de får gjort både den
                        kvalitative og kvantitative brukerinnsikten de opplever at teamet har behov for. Men mange andre
                        kjenner på utfordringer rundt dette, og årsakene er varierende fra person til person.
                    </p>
                </Finding>

                <Quotes>
                    «Det er satt av hva man uansett skal utvikle i lang tid fremover så det er irrelevant med innsikt
                    annet enn målinger og tilbakemeldinger»
                </Quotes>
                <Finding>
                    <p>
                        En person trekker frem en erfaring rundt at det var greit å gjøre innsiktsarbeid, men når det
                        kom til stykket ble ikke nye endringer prioritert og gjennomført på bakgrunnen av det en lærte.
                        Å jobbe i en organisasjon som har lagt planer langt frem i tid for hva som skal lages, der er
                        det ikke særlig rom for utforskning eller analyse av det som er laget. Da handler det kanskje
                        ikke så mye om en får gjort brukerinnsikt eller ikke, men mer om hvordan hele organisasjonen
                        jobber etter langsiktige planer og satte frister, uten rom for å endre planer etterhvert som man
                        lærer. <br />
                        Hvordan endrer vi da kulturen for å få til å jobbe mer smidig og med mindre risiko for å bygge
                        feil ting? Å jobbe mer produktorientert? Hvordan klarer vi å jobbe mer med kontinuerlig læring,
                        for slik å øke sannsynligheten for at vi bygger noe som brukerne faktisk har behov for?
                    </p>
                </Finding>
                <Finding>
                    <FindingTitle>Hva opplever du?</FindingTitle>
                    <p>
                        <a
                            href="https://tally.so/r/wLd1qy
"
                        >
                            Ta spørreundersøkelsen her
                        </a>{' '}
                        - den er åpen i en stund fremover.
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
