import React from 'react';
import { useSelector } from 'react-redux';
import FeesEarnedOverview from '../../containers/FeesEarnedOverview';
import { Reducers } from '../../redux/reducers';

interface Props {
    className?: string;
}

export default function FeesEarnedOverviewConnector({
    className,
}: Props) {
    const poolTokens = useSelector((store: Reducers) => store.account.poolTokens);

    return <FeesEarnedOverview poolTokens={poolTokens} className={className} />
}
