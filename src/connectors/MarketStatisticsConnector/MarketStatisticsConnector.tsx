import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import MarketStatistics from '../../containers/MarketStatistics';
import MarketStatisticsLoader from '../../containers/MarketStatistics/MarketStatisticsLoader';
import { Reducers } from '../../redux/reducers';

interface Props {
    className?: string;
}

export default function MarketStatisticsConnector({
    className = '',
}: Props): ReactElement {
    const pricesHistory = useSelector((store: Reducers) => store.priceHistory.pricesHistory);
    const loading = useSelector((store: Reducers) => store.priceHistory.pricesLoading);

    if (loading) {
        return <MarketStatisticsLoader />
    }

    return (
        <MarketStatistics pricesHistory={pricesHistory} className={className} />
    );
}
