import React from 'react';
import { ReactElement } from 'react';
import { MarketViewModel } from '../../models/Market';
import trans from '../../translation/trans';

import s from './MarketResolutionInfo.module.scss';
interface Props {
    market: MarketViewModel;
}

export default function MarketResolutionInfo({
    market,
}: Props): ReactElement {
    return (
        <section className={s.root}>
            <h2 className={s.title}>{trans('market.label.resolutionInfo')}</h2>
            <p>{market.extraInfo}</p>
        </section>
    );
}
