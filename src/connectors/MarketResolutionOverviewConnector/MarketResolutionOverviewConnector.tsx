import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import MarketResolutionOverview from '../../containers/MarketResolutionOverview';
import { Reducers } from '../../redux/reducers';


export default function MarketResolutionOverviewConnector(): ReactElement {
    const resolutingMarkets = useSelector((store: Reducers) => store.market.resolutingMarkets);

    return (
        <MarketResolutionOverview markets={resolutingMarkets} />
    );
}
