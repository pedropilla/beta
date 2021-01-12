import React from 'react';
import classnames from 'classnames';

import { TokenViewModel } from '../../models/TokenViewModel';

import s from './TokenSelect.module.scss';
import trans from '../../translation/trans';
import Token from '../../components/Token';
import NonLinkButton from '../../components/NonLinkButton';

interface Props {
    className?: string;
    selectedToken: TokenViewModel;
    tokens: TokenViewModel[];
    value: string;
}

export default function TokenSelect({
    selectedToken,
    tokens,
    value,
    className = '',
}: Props) {
    return (
        <div className={classnames(s['token-select'], className)}>
            <div className={s['token-select__info']}>
                <span>{selectedToken.tokenName} {trans('global.token')}</span>
                <span>${selectedToken.price}</span>
            </div>
            <div className={s['token-select__inputs']}>
                <div className={s['token-select__inputs-info']}>
                    <Token tokenName={selectedToken.tokenName} className={s['token-select__token-icon']} />
                    {tokens.length === 1 && (<span className={s['token-select__token-name']}>{selectedToken.tokenName}</span>)}
                    {tokens.length > 1 && <NonLinkButton>{trans('market.action.changeTradingPair')}</NonLinkButton>}
                </div>
                <input type="number" value={value} className={s['token-select__input']} />
            </div>
        </div>
    );
}
