import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MarketOverviewConnector from '../../../../connectors/MarketOverviewConnector';
import { fetchMarkets } from '../../../../redux/market/marketActions';


export default function MarketsOverviewPage(): ReactElement {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMarkets());
    }, [dispatch]);

    return (
        <section>
            <MarketOverviewConnector />
        </section>
    );
}
