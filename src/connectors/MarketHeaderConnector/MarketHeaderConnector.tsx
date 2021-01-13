import React, { ReactElement, useReducer } from 'react';
import { useSelector } from 'react-redux';
import MarketHeader from '../../containers/MarketHeader';
import { Reducers } from '../../redux/reducers';

interface Props {
    className?: string;
}

export default function MarketHeaderConnector({
    className,
}: Props): ReactElement {
    const market = useSelector((store: Reducers) => store.market.marketDetail);

    if (!market) {
        return <div />;
    }

    return (
        <MarketHeader market={market} className={className} />
    );
}
