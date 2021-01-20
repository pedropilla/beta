import React, { ReactElement, useState } from 'react';
import { useSelector } from 'react-redux';
import TokenSwapper from '../../containers/TokenSwapper';
import TokenSwapperLoader from '../../containers/TokenSwapper/TokenSwapperLoader';
import { TokenViewModel } from '../../models/TokenViewModel';
import { Reducers } from '../../redux/reducers';

interface Props {
    className?: string;
}

export default function TokenSwapperConnector({
    className,
}: Props): ReactElement {
    const [switched, setSwitched] = useState(false);
    const mainToken = useSelector((store: Reducers) => store.tokens.mainToken);

    if (!mainToken) {
        return <TokenSwapperLoader />;
    }

    const inputs: TokenViewModel[] = [mainToken];

    const outputs: TokenViewModel[] = [
        {
            balance: '4.50',
            price: 2.38,
            tokenName: 'KANYE WEST',
            balanceFormatted: '4.50',
        },
        {
            balance: '7.92',
            price: 2.38,
            balanceFormatted: '4.50',
            tokenName: 'NO'
        },
        {
            balance: '1',
            price: 2.38,
            balanceFormatted: '4.50',
            tokenName: 'MAYBE'
        }
    ];

    function onConfirm() {

    }

    function handleRequestSwitchPairs() {
        setSwitched(!switched);
    }

    return (
        <TokenSwapper
            inputs={switched ? outputs : inputs}
            outputs={switched ? inputs : outputs}
            onConfirm={onConfirm}
            onRequestSwitchPairs={handleRequestSwitchPairs}
            className={className}
        />
    );
}
