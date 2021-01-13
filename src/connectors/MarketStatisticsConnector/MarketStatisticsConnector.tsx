import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import MarketStatistics from '../../containers/MarketStatistics';
import { Reducers } from '../../redux/reducers';

interface Props {
    className?: string;
}

export default function MarketStatisticsConnector({
    className = '',
}: Props): ReactElement {
    const pricesHistory = useSelector((store: Reducers) => store.priceHistory.pricesHistory);

    return (
        <MarketStatistics pricesHistory={pricesHistory} className={className} />
    );
}
