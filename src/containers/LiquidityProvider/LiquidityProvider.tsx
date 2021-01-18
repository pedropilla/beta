import React, { ReactElement, useState } from 'react';

import Button from '../../components/Button';
import { TokenViewModel } from '../../models/TokenViewModel';
import trans from '../../translation/trans';
import TokenSelect from '../TokenSelect';

import s from './LiquidityProvider.module.scss';

interface Props {
    token: TokenViewModel;
}

export default function LiquidityProvider({
    token,
}: Props): ReactElement {
    const [liquidityAmount, setLiquidityAmount] = useState('0');

    return (
        <div>
            <TokenSelect
                value={liquidityAmount}
                onValueChange={(v) => setLiquidityAmount(v)}
                onTokenSwitch={() => {}}
                selectedToken={token}
                tokens={[token]}
                className={s.tokenSelect}
            />
            <Button type="submit" className={s.confirm}>
                {trans('market.action.confirmLiquidity')}
            </Button>
        </div>
    );
}
