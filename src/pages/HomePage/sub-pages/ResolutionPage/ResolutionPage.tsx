import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MarketResolutionOverviewConnector from '../../../../connectors/MarketResolutionOverviewConnector';
import { fetchResolutingMarkets } from '../../../../redux/market/marketActions';


export default function ResolutionPage(): ReactElement {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchResolutingMarkets());
    }, [dispatch]);

    return (
        <section>
            <MarketResolutionOverviewConnector />
        </section>
    );
}
