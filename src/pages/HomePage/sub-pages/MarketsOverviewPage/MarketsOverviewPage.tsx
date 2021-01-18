import React, { ReactElement } from 'react';
import MarketOverviewConnector from '../../../../connectors/MarketOverviewConnector';


export default function MarketsOverviewPage(): ReactElement {
    return (
        <section>
            <MarketOverviewConnector />
        </section>
    );
}
