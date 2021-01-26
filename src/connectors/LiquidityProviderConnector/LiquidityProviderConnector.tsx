import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import LiquidityProvider from '../../containers/LiquidityProvider';
import { Reducers } from '../../redux/reducers';


export default function LiquidityProviderConnector(): ReactElement {
    const mainToken = useSelector((store: Reducers) => store.tokens.mainToken);

    if (!mainToken) {
        return <div />
    }

    return (
        <LiquidityProvider token={mainToken}  />
    );
}
