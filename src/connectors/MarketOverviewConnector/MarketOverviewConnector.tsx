import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import MarketOverview from '../../containers/MarketOverview';
import { Reducers } from '../../redux/reducers';


export default function MarketOverviewConnector(): ReactElement {
    const markets = useSelector((store: Reducers) => store.market.markets);

    return (
        <MarketOverview markets={markets} />
    );
}
