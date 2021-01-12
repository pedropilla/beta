import React, { FormEvent, ReactElement, useState } from 'react';
import Button from '../../components/Button';
import { TokenViewModel } from '../../models/TokenViewModel';
import trans from '../../translation/trans';
import TokenSelect from '../TokenSelect';
import SwapOverview from './components/SwapOverview/SwapOverview';

import s from './TokenSwapper.module.scss';

interface TokenSwapperProps {
    inputs: TokenViewModel[];
    outputs: TokenViewModel[];
    onRequestSwitchPairs: () => void;
    onConfirm: () => void;
}

export default function TokenSwapper({
    inputs,
    outputs,
    onConfirm
}: TokenSwapperProps): ReactElement {
    const [selectedInputToken] = useState(inputs[0]);
    const [selectedOutputToken] = useState(outputs[0]);

    const [inputValue] = useState('0');
    const [outputValue] = useState('0');

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onConfirm();
    }

    return (
        <form className={s['token-swapper']} onSubmit={handleSubmit}>
            <div className={s['token-swapper__token']}>
                <div className={s['token-swapper__token-header']}>
                    <span>{trans('market.label.youPay')}</span>
                    <span>{trans('global.balance', {}, true)}: {selectedInputToken.balance}</span>
                </div>
                <TokenSelect value={inputValue} tokens={inputs} selectedToken={selectedInputToken} />
            </div>
            <div className={s['token-swapper__token']}>
                <div className={s['token-swapper__token-header']}>
                    <span>{trans('market.label.youReceive')}</span>
                </div>
                <TokenSelect value={outputValue} tokens={outputs} selectedToken={selectedOutputToken} />
            </div>
            <div className={s['token-swapper__token']}>
                <div className={s['token-swapper__token-header']}>
                    <span>{trans('market.label.overview', {}, true)}</span>
                </div>
                <SwapOverview />
            </div>
            <Button type="submit" className={s['token-swapper__confirm']}>
                {trans('market.action.confirmSwap')}
            </Button>
        </form>
    );
}
