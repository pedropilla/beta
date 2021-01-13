import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import MarketHeaderConnector from '../../connectors/MarketHeaderConnector';
import MarketResolutionInfoConenctor from '../../connectors/MarketResolutionInfoConnector';
import MarketStatisticsConnector from '../../connectors/MarketStatisticsConnector';
import TokenSwapperConnector from '../../connectors/TokenSwapperConnector';
import Page from '../../containers/Page';
import { fetchMarketById } from '../../redux/market/marketActions';

import s from './MarketPage.module.scss';

interface RouterParams {
    marketId: string;
}

export default function MarketPage() {
    const dispatch = useDispatch();
    const { marketId } = useParams<RouterParams>();

    useEffect(() => {
        dispatch(fetchMarketById(marketId));
    }, [dispatch, marketId]);

    return (
        <Page hasNavigation size="unrestricted" className={s['market-page']}>
            <MarketHeaderConnector />
            <div className={s['market-page__detail']}>
                <div>
                    <MarketStatisticsConnector />
                    <MarketResolutionInfoConenctor />
                </div>
                <TokenSwapperConnector className={s['market-page__token-swapper']} />
            </div>
        </Page>
    );
}
