import React, { ReactElement, useState } from 'react';
import { useSelector } from 'react-redux';
import TokenSwapper from '../../containers/TokenSwapper';
import TokenSwapperLoader from '../../containers/TokenSwapper/TokenSwapperLoader';
import { TokenViewModel } from '../../models/TokenViewModel';
import { Reducers } from '../../redux/reducers';
import createProtocolContract from '../../services/contracts/ProtocolContract';
import createTokenContract from '../../services/contracts/TokenContract';
import { SwapFormValues } from '../../services/SwapService';

interface Props {
    className?: string;
}

export default function TokenSwapperConnector({
    className,
}: Props): ReactElement {
    const [switched, setSwitched] = useState(false);
    const market = useSelector((store: Reducers) => store.market.marketDetail);

    if (!market) {
        return <TokenSwapperLoader />;
    }

    const inputs: TokenViewModel[] = [market.collateralToken];

    async function onConfirm(
        values: SwapFormValues
    ): Promise<void> {
        if (!market) throw new Error("Market is undefined");

        if (values.fromToken.tokenName === market.collateralTokenId) {
            const token = await createTokenContract(values.fromToken.tokenName);
            return token.buy(market.id, values);
        } else {
            const protocol = await createProtocolContract();
            return protocol.sell(market.id, values);
        }
    }

    function handleRequestSwitchPairs() {
        setSwitched(!switched);
    }

    return (
        <TokenSwapper
            market={market}
            inputs={switched ? market.outcomeTokens : inputs}
            outputs={switched ? inputs : market.outcomeTokens}
            onConfirm={onConfirm}
            onRequestSwitchPairs={handleRequestSwitchPairs}
            className={className}
        />
    );
}
