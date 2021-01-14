import React, { ReactElement } from 'react';

import MarketCard from '../../compositions/MarketCard';
import { MarketViewModel } from '../../models/Market';
import { routePaths } from '../../routes';

import s from './MarketOverview.module.scss';

interface Props {
    markets: MarketViewModel[];
}

export default function MarketOverview({
    markets,
}: Props): ReactElement {
    return (
        <div className={s.root}>
            {markets.map(market => (
                <MarketCard
                    href={routePaths.marketDetail(market.id)}
                    className={s.market}
                    market={market}
                />
            ))}
        </div>
    );
}
