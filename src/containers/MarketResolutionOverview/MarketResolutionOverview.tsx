import React, { ReactElement } from 'react';
import { MarketViewModel } from '../../models/Market';
import { routePaths } from '../../routes';
import MarketResolutionCard from '../MarketResolutionCard';

import s from './MarketResolutionOverview.module.scss';

interface Props {
    markets: MarketViewModel[];
}

export default function MarketResolutionOverview({
    markets,
}: Props): ReactElement {
    return (
        <div className={s.root}>
            {markets.map(market => (
                <MarketResolutionCard
                    href={routePaths.marketDetail(market.id)}
                    market={market}
                    className={s.market}
                />
            ))}
        </div>
    );
}
