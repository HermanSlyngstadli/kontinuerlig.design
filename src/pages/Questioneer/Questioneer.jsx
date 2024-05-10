import React from 'react'
import styled from 'styled-components'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import jsonData from './Text.json'

const MainSection = styled.main`
    padding: 10vh 20px 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
        grid-column: 1 / span 2;
    }
`
const Title = styled.h1`
    grid-column: 1 / span 2;
`
const Intro = styled.p`
    grid-column: 3 / span 4;
    @media screen and (max-width: 850px) {
        grid-template-columns: repeat(2, 1fr);
        grid-column: 1 / span 2;
    }
`
const Finding = styled.p`
    grid-column: 3 / span 4;
    @media screen and (max-width: 850px) {
        grid-template-columns: repeat(2, 1fr);
        grid-column: 1 / span 2;
    }
`
const FindingBigTitle = styled.p`
    font-size: 48px;
    margin-bottom: 1vh;
`
const FindingTitle = styled.p`
    font-size: 30px;
`
const Quotes = styled.span`
    font-family: 'GT America Expanded';
    && {
        grid-column: 2 / span 3;
    }
    position: relative;

    /* Underline */
    &::after {
        content: '';
        position: absolute;
        left: -20px;
        top: 0;
        width: 0.15em;
        height: 100%;
        background-color: #d4ff26;
    }
`
const Answers = styled.p`
    color: #aeb7ab;
    margin: 0;
    padding-left: -2vh;
    padding-bottom: 1vh;
`
const FindingContent = styled.p``

export const Questioneer = () => {
    const { title, intro, quote, link, findings } = jsonData

    return (
        <>
            <Navigation />
            <MainSection>
                <Title>{title}</Title>
                <Intro>{intro}</Intro>

                {findings.map((finding, index) => (
                    <Finding key={index}>
                        <FindingBigTitle>{finding.bigTitle}</FindingBigTitle>
                        <FindingTitle>{finding.title}</FindingTitle>
                        <a href="URL_TIL_SPØRREUNDERSØKELSE">{finding.link}</a>
                        <Finding>{finding.content}</Finding>

                        <Quotes style={{ gridColumnStart: '2' }}>{finding.quote}</Quotes>
                    </Finding>
                ))}
            </MainSection>
            <Footer />
        </>
    )
}

export default Questioneer

// export const Questioneer = ({ children }) => {
//     return (
//         <>
//             <Navigation />
//             <MainSection>
//                 <Title>Barrierer for innsiktsarbeid</Title>
//                 <Intro>
//                     Hvorfor gjør vi ikke innsiktsarbeid så ofte som vi kunne ønske? Etter et dypdykk i dette spørsmålet
//                     har vi nå også hørt fra noen av dere i bransjen. Innsiktsarbeid trengs for å ta gode beslutninger om
//                     hva vi skal lage, hvorfor og hvordan, og aller helst fra både kvalitative og kvantitative data. Vi
//                     trenger også forståelse av domenet vi jobber innenfor - som bl.a. det juridiske, tekniske og hvordan
//                     organisasjonen fungerer. I denne undersøkelsen har vi snevret inn fokuset på kvalitativ og
//                     kvantitativ brukerinnsikt. Per 7. mai 2024 har 64 svart. <br /> <br />
//                     Vi kan ikke si at dette er resultater som viser bransjen, derfor viser vi antallet svar per spørsmål
//                     - dette er bare en indikasjon på hva noen i bransjen opplever. Kort oppsummert: hverdagene våre ser
//                     ganske forskjellige ut, og naturlig nok kjenner vi også da på ulike årsaker til hvorfor vi ikke får
//                     gjennomført den brukerinnsikten vi har behov for! To tredjedeler av oss jobber i en organisasjon som
//                     forstår hvorfor vi jobber brukersentrert (hurra!), men dessverre er det hele en tredjedel som
//                     opplever at organisasjonen ikke forstår hvorfor vi trenger å snakke med brukere (sukk).
//                 </Intro>

//                 <Finding>
//                     <FindingBigTitle>Halvparten får ikke gjort nok kvalitativ brukerinnsikt</FindingBigTitle> <br />
//                     Men på den andre siden opplever også halvparten at de får gjort tilstrekkelig med kvalitativt
//                     innsiktsarbeid (hurra!).
//                 </Finding>
//                 <Finding>
//                     <FindingTitle>Ganske mange er dypt nede i byggefella</FindingTitle>
//                     Noe av det folk trekker frem når de påpeker hvorfor de ikke får gjort nok kvalitativt innsiktsarbeid
//                     er å få prioritert det. Folk har travle hverdager, så det er mange som ikke får tid eller orker å
//                     prioritere utforskningen i hverdagen.{' '}
//                     <ul>
//                         <li>
//                             Vi er opptatt med å bygge og lage ny funksjonalitet <br />
//                             <Answers>19 svar av 37 mulige</Answers>
//                         </li>
//                         <li>
//                             Det er travelt og det er tungt å engasjere seg selv og teamet til å sette i gang (19 svar av
//                             37 mulige)
//                         </li>
//                         <li>
//                             Forarbeidet tar (for) mye tid - som rekruttering og intervjuguide (11 svar av 37 mulige)
//                         </li>
//                     </ul>
//                 </Finding>
//                 <Quotes style={{ marginBottom: '5vh' }}>“IKKE ROM I PRIO TIL Å SE FRAMOVER”</Quotes>
//                 <Quotes>
//                     “FØLES SOM OM ET ANNET TEAM ALLEREDE HAR GJORT INNSIKTEN OG VI BARE MÅ TA DERES RESULTATER FOR GOD
//                     FISK.”
//                 </Quotes>
//                 <Finding>
//                     <FindingTitle>
//                         Mange peker på at det er lederne som ikke lar en få lov til å gjøre innsiktsarbeid
//                     </FindingTitle>{' '}
//                     Kan dette også være relatert til byggefella? At fokuset er på at vi bygger, bygger, bygger? Hvordan
//                     vet vi hva vi skal bygge og hvordan uten denne utforskningen? Det kan se ut til at mange fortsatt
//                     jobber i oppdelte faser, der det kvalitative innsiktsarbeidet i hovedsak skjer før en starter
//                     byggingen. Hvor er det kontinuerlige arbeidet? Bygge, måle, lære?
//                     <ul>
//                         <li>
//                             Leder ønsker ikke å prioritere det fordi andre oppgaver er viktigere. 14 svar av 37 mulige
//                         </li>
//                         <li>
//                             Leder ønsker ikke å prioritere det fordi organisasjonen allerede har mye forståelse for
//                             brukerne - brukerinnsikten er allerede hentet inn 9 svar av 37 mulige
//                         </li>
//                     </ul>
//                 </Finding>
//                 <Finding>
//                     <FindingTitle>
//                         For de fleste handler det ikke om kompetanse på kvalitativt innsiktsarbeid
//                     </FindingTitle>{' '}
//                     Hvis vi skal tenke over hva som er det reelle problemet å løse her, så kan det se ut som det ikke er
//                     å bygge kompetanse som er det viktige - det handler gjerne mer om kulturen i organisasjonen?
//                     <ul>
//                         <li>
//                             Jeg kan det ikke godt nok og føler meg ikke trygg på å gjennomføre det 3 svar av 37 mulige
//                         </li>
//                     </ul>
//                 </Finding>
//                 <Finding>
//                     <FindingTitle>Få svarer at det er de juridiske barrierene som står i veien </FindingTitle>
//                     Et litt overraskende funn da dette er noe vi har fått inntrykk av at noen kjenner veldig sterkt på.
//                     Da kan det virke som det varierer fra organisasjon til organisasjon om det er juridiske og
//                     personvernmessige hindrer i veien for å få gjennomført for eksempel et intervju.
//                     <ul>
//                         <li>
//                             Juridiske barrierer: vurdering av personvern i rekruttering og innsamling av data 2 svar av
//                             37 mulige
//                         </li>
//                     </ul>
//                 </Finding>
//                 <Finding>
//                     <FindingBigTitle>
//                         Halvparten sier at de ikke får gjort nok kvantitativ brukerinnsikt
//                     </FindingBigTitle>{' '}
//                     <br />
//                     På spørsmålet om en opplever at teamet har fått gjort den brukerinnsikten en har behov for, så er
//                     tilfeldigvis antallet likt på kvalitativ og kvantitativ brukerinnsikt. Når en ser på svarene så er
//                     det likevel ikke alltid de samme personene som svarer “ja” på begge. 16 av 64 svarer at de får gjort
//                     det kvantitative innsiktsarbeidet de har behov for, men ikke det kvalitative.
//                 </Finding>
//                 <Finding>
//                     <FindingTitle>
//                         Også for kvantitativ brukerinnsikt oppgir mange årsaken om at en er travelt opptatt med å bygge
//                         funksjonalitet{' '}
//                     </FindingTitle>{' '}
//                     Bygging har ikke noe verdi i seg selv, så hvordan kan vi vite om vi bygger det riktige uten å
//                     analysere i etterkant. Hvordan kan vi gjøre det lavterskel å sjekke i etterkant av byggingen for å
//                     se om det vi lager faktisk treffer på brukerbehov? Skaper den nye funksjonaliteten den effekten vi
//                     forventet?
//                     <ul>
//                         <li>Vi er opptatt med å bygge og lage ny funksjonalitet 10 svar av 37 mulige</li>
//                     </ul>
//                 </Finding>
//                 <Finding>
//                     <FindingTitle>
//                         Den viktigste årsaken er at teamet ikke har tilgang til et analyseverktøy
//                     </FindingTitle>{' '}
//                     Det er synd at det er mangel på verktøy som stopper oss i å få gjennomført analyser av brukere og
//                     funksjonalitet. Kvantitative data kan en også få tak i fra databasen - men er det for tungvindt og
//                     teknisk?
//                     <ul>
//                         <li>
//                             Har ikke tilgang på analyseverktøy i teamet (f.eks. Amplitude, Google analytcs e.l.) 16 svar
//                             av 37 mulige
//                         </li>
//                     </ul>
//                 </Finding>
//                 <Finding>
//                     <FindingTitle>
//                         Mange trekker frem manglende kompetanse som en årsak - både som designer og i teamet generelt
//                     </FindingTitle>{' '}
//                     Har vi for lite erfaring og opplæring fra studiene i å dykke inn i kvantitative data og formidle
//                     den? Det kan være komplisert å fremstille data på en riktig og fornuftig måte. Hvordan kan vi som
//                     bransje øke forståelsen for metrikker, analyse av kvantitative data og CRO
//                     (Konverteringsoptimalisering)? <br />
//                     <br />
//                     Det er endel av de samme folka som svarer at en selv ikke har kompetansen og at teamet ikke har
//                     kompetansen, og når det i tillegg er travelt, så kan det være vanskelig å engasjere teamet til å
//                     komme i gang.
//                     <ul>
//                         <li>
//                             Jeg kan det ikke godt nok og føler meg ikke trygg på å gjennomføre det 9 svar av 36 mulige
//                         </li>
//                         <li>Teamet mangler kompetansen til å sette opp målinger 10 svar av 36 mulige</li>
//                         <li>
//                             Det er travelt og det er tungt å engasjere seg selv og teamet til å sette i gang 10 svar av
//                             36 mulige
//                         </li>
//                     </ul>
//                 </Finding>
//                 <Quotes>
//                     {' '}
//                     “TEAMET MÅLER ALT FOR MANFE PARAMETRE OG HAR IKKE NOE BEVISST FORHOLD TIL HVORDAN Å BRUKE DATAEN DE
//                     SAMLER INN”
//                 </Quotes>
//                 <Finding>
//                     <FindingBigTitle>Noen refleksjoner på slutten</FindingBigTitle> <br />
//                     Det er tydelig hvor forskjellige hverdager vi faktisk sitter i – der 20 % faktisk føler på at de får
//                     gjort både den kvalitative og kvantitative brukerinnsikten de opplever at teamet har behov for. Men
//                     mange andre kjenner på utfordringer rundt dette, og årsakene er varierende fra person til person.{' '}
//                     <br />
//                     <br />
//                     <Quotes>
//                         “det er satt hva man uansett skal utvikle i lang tid framover så det er irrelevant med innsikt
//                         annet enn målinger og tilbakemeldinger”
//                     </Quotes>
//                     En person trekker frem en erfaring rundt at det var greit å gjøre innsiktsarbeid, men når det kom
//                     til stykket så ble ikke nye endringer faktisk prioritert og gjennomført. Hvis en jobber i en
//                     organisasjon der en har planlagt så langt frem hva som skal lages, så er det jo ikke særlig rom for
//                     noe utforskning eller analyse av det som er laget. Da handler det kanskje ikke så mye lenger om en
//                     får gjort brukerinnsikt eller ikke. Det handler mer om hvordan hele organisasjonen jobber etter
//                     lange planer og satte frister, uten rom for å endre planer etterhvert som man lærer. Hvordan endrer
//                     vi da kulturen for å få til å jobbe mer smidig og med mindre risiko for å bygge feil ting? Å jobbe
//                     mer produktorientert. Hvordan klarer vi å jobbe mer med kontinuerlig læring, for slik å øke
//                     sannsynligheten for at vi bygger noe som brukerne faktisk har behov for?
//                 </Finding>
//                 <Finding>
//                     <FindingTitle>Hva opplever du?</FindingTitle>
//                     <a href="">Ta spørreundersøkelsen her</a> - den er åpen i en stund fremover.
//                 </Finding>
//             </MainSection>
//             <Footer />
//         </>
//     )
// }
