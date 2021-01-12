import React, { ReactElement } from 'react';
import MarketHeader from '../../containers/MarketHeader';
import { Market } from '../../models/Market';


export default function MarketHeaderConnector(): ReactElement {
    const market: Market = {
        id: '12',
        description: "Will SpaceX launch a second manned mission in 2020?",
        resolutionDate: new Date(),
    };

    return (
        <MarketHeader market={market} />
    );
}
