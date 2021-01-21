import React from 'react';
import { MarketViewModel } from '../../../../models/Market';
import trans from '../../../../translation/trans';

interface Props {
    market: MarketViewModel;
}

export default function WrongOwnerMessage({
    market,
}: Props) {
    return (
        <div>
            <h2>{trans('seedPool.wrongUser.title')}</h2>
            <p>
                {trans('seedPool.wrongUser.description', {
                    account: market.owner,
                })}
            </p>
        </div>
    );
}
