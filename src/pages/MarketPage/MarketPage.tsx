import React from 'react';
import MarketHeaderConnector from '../../connectors/MarketHeaderConnector';
import TokenSwapperConnector from '../../connectors/TokenSwapperConnector';
import Page from '../../containers/Page';

import s from './MarketPage.module.scss';

export default function MarketPage() {
    return (
        <Page hasNavigation size="unrestricted" className={s['market-page']}>
            <MarketHeaderConnector />
            <div className={s['market-page__detail']}>
                <TokenSwapperConnector />
            </div>
        </Page>
    );
}
