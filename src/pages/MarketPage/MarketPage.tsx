import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import MarketHeaderConnector from '../../connectors/MarketHeaderConnector';
import MarketResolutionInfoConenctor from '../../connectors/MarketResolutionInfoConnector';
import MarketStatisticsConnector from '../../connectors/MarketStatisticsConnector';
import TokenSwapperConnector from '../../connectors/TokenSwapperConnector';
import Page from '../../containers/Page';
import { fetchMarketById } from '../../redux/market/marketActions';
import { fetchPricesHistoryByMarketId } from '../../redux/priceHistory/priceHistoryActions';

import s from './MarketPage.module.scss';

interface RouterParams {
    marketId: string;
}

export default function MarketPage() {
    const dispatch = useDispatch();
    const { marketId } = useParams<RouterParams>();

    useEffect(() => {
        dispatch(fetchMarketById(marketId));
        dispatch(fetchPricesHistoryByMarketId(marketId))
    }, [dispatch, marketId]);

    return (
        <Page hasNavigation size="unrestricted" className={s.root}>
            <MarketHeaderConnector />
            <div className={s.details}>
                <div className={s.infoWrapper}>
                    <MarketStatisticsConnector className={s.stats} />
                    <MarketResolutionInfoConenctor />
                </div>
                <TokenSwapperConnector className={s.tokenSwapper} />
            </div>
        </Page>
    );
}
