import React, { ReactElement } from 'react';
import LiquidityProvider from '../../containers/LiquidityProvider';
import { TokenViewModel } from '../../models/TokenViewModel';


export default function LiquidityProviderConnector(): ReactElement {

    const token: TokenViewModel = {
        balance: '10,000.31',
        price: '2.38',
        tokenName: 'NEAR'
    };


    return (
        <LiquidityProvider token={token}  />
    );
}
