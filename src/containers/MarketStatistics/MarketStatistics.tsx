import React, { ReactElement } from 'react';
import classnames from 'classnames';

import s from './MarketStatistics.module.scss';
import LineChart from '../LineChart';
import { PriceHistoryData } from '../../models/PriceHistoryData';

interface Props {
    className?: string;
    pricesHistory: PriceHistoryData[];
}

export default function MarketStatistics({
    pricesHistory,
    className = '',
}: Props): ReactElement {
    return (
        <div className={classnames(s['market-statistics'], className)}>
            <LineChart pricesHistory={pricesHistory} />
        </div>
    )
}
