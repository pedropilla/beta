import React, { FormEvent, ReactElement, useCallback, useState } from 'react';
import classnames from 'classnames';

import Button from '../../components/Button';
import IconButton from '../../components/IconButton';
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
    className?: string;
}

export default function TokenSwapper({
    inputs,
    outputs,
    onConfirm,
    onRequestSwitchPairs,
    className = '',
}: TokenSwapperProps): ReactElement {
    const [selectedInputToken, setSelectedInputToken] = useState(inputs[0]);
    const [selectedOutputToken, setSelectedOutputToken] = useState(outputs[0]);

    const [inputValue, setInputValue] = useState('0');
    const [outputValue, setOutputValue] = useState('0');

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onConfirm();
    }

    const handleInputTokenSwitch = useCallback((token: TokenViewModel) => {
        setSelectedInputToken(token);
    }, []);

    const handleOutputTokenSwitch = useCallback((token: TokenViewModel) => {
        setSelectedOutputToken(token);
    }, []);

    function switchTokenPlaces() {
        setSelectedInputToken(selectedOutputToken);
        setSelectedOutputToken(selectedInputToken);
        setInputValue(outputValue);
        setOutputValue(inputValue);

        onRequestSwitchPairs();
    }

    return (
        <form className={classnames(s['token-swapper'], className)} onSubmit={handleSubmit}>
            <div className={s['token-swapper__token']}>
                <div className={s['token-swapper__token-header']}>
                    <span>{trans('market.label.youPay')}</span>
                    <span>{trans('global.balance', {}, true)}: {selectedInputToken.balance}</span>
                </div>
                <TokenSelect
                    onTokenSwitch={handleInputTokenSwitch}
                    value={inputValue}
                    tokens={inputs}
                    selectedToken={selectedInputToken}
                    onValueChange={(v) => setInputValue(v)}
                />
            </div>

            <div className={s['token-swapper__switch-tokens']}>
                <IconButton onClick={switchTokenPlaces} icon="/assets/icons/swap.svg" alt={trans('market.action.switchTokens')} />
            </div>

            <div className={s['token-swapper__token']}>
                <div className={s['token-swapper__token-header']}>
                    <span>{trans('market.label.youReceive')}</span>
                </div>
                <TokenSelect
                    onTokenSwitch={handleOutputTokenSwitch}
                    value={outputValue}
                    tokens={outputs}
                    selectedToken={selectedOutputToken}
                    onValueChange={(v) => setOutputValue(v)}
                />
            </div>

            <div className={s['token-swapper__token']}>
                <div className={s['token-swapper__token-header']}>
                    <span>{trans('market.label.overview', {}, true)}</span>
                </div>
                <SwapOverview />
            </div>

            <Button className={s['token-swapper__confirm']}>
                {trans('market.action.confirmSwap')}
            </Button>
        </form>
    );
}
