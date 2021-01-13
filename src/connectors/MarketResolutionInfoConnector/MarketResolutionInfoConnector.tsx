import React from 'react';
import { useSelector } from 'react-redux';
import MarketResolutionInfo from '../../containers/MarketResolutionInfo';
import { Reducers } from '../../redux/reducers';


export default function MarketResolutionInfoConnector() {
    const market = useSelector((store: Reducers) => store.market.marketDetail);

    if (!market) {
        return <div />;
    }

    return (
        <MarketResolutionInfo market={market} />
    );
}
