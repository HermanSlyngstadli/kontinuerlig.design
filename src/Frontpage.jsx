import GridItem from './components/GridItem'
import LayoutGrid from './components/LayoutGrid'
import { Page } from './components/Page'
import { Paragraph } from './components/Paragraph'

export const Frontpage = () => {
    return (
        <Page title="Designfaget er i kontinuerlig endring" overline="Bekk">
            <LayoutGrid>
                <GridItem large={12} small={12}>
                    <p style={{ fontSize: '1.5rem' }}>
                        Og hvis vi ikke tar det inn over oss nå, så går verden videre uten oss.
                    </p>
                </GridItem>
            </LayoutGrid>
        </Page>
    )
}
