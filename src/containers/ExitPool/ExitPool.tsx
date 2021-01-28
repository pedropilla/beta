import React, { useState } from 'react';
import Button from '../../components/Button';
import Error from '../../components/Error';
import { PoolToken, transformPoolTokenToTokenViewModel } from '../../models/PoolToken';
import { formatCollateralToken } from '../../services/CollateralTokenService';
import trans from '../../translation/trans';
import TokenSelect from '../TokenSelect';

import s from './ExitPool.module.scss';
import createDefaultExitPoolFormValues, { ExitPoolFormValues } from './services/createDefaultExitPoolFormValues';
import validateExitPool from './services/validateExitPool';

interface Props {
    poolToken: PoolToken;
    onExitPool: (formValues: ExitPoolFormValues) => void;
}

export default function ExitPool({
    poolToken,
    onExitPool,
}: Props) {
    const [formValues, setFormValues] = useState(createDefaultExitPoolFormValues());
    const token = transformPoolTokenToTokenViewModel(poolToken);

    function handleAmountInChange(value: string) {
        setFormValues({
            ...formValues,
            amountIn: value,
        });
    }

    function handleSubmit() {
        onExitPool(formValues);
    }

    const errors = validateExitPool(formValues, poolToken);

    return (
        <section>
            <p>
                {trans('exitPool.description')}
            </p>
            <div className={s.header}>
                <span>{trans('exitPool.label.youInsert')}</span>
                <span>{trans('global.balance', {}, true)}: {poolToken.balanceFormatted}</span>
            </div>
            <TokenSelect
                value={formValues.amountIn}
                onValueChange={handleAmountInChange}
                onTokenSwitch={() => { }}
                selectedToken={token}
                tokens={[token]}
                className={s.tokenSelect}
                showPrice={false}
            />
            <Error error={errors.amountIn} />
            <p>
                {trans('exitPool.label.feesEarned', {
                    amount: formatCollateralToken(poolToken.fees, 18, 8),
                })}
            </p>
            <Button onClick={handleSubmit} className={s.confirm} disabled={!errors.canSubmit}>
                {trans('exitPool.action.exitPool')}
            </Button>
        </section>
    );
}
