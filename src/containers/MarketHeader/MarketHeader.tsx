import React from 'react';
import Button from '../../components/Button';
import LinkButton from '../../components/LinkButton';
import { Market } from '../../models/Market';
import { formatResolutionDate } from '../../services/MarketService';
import trans from '../../translation/trans';

import s from './MarketHeader.module.scss';

interface Props {
    market: Market;
}

export default function MarketHeader({
    market,
}: Props) {
    return (
        <header className={s['market-header']}>
            <LinkButton className={s['market-header__back-button']} href="/">
                {trans('navigation.back')}
            </LinkButton>
            <h1 className={s['market-header__title']}>{market.description}</h1>
            <span className={s['market-header__resolution-date']}>
                <span className={s['market-header__resolution-date-title']}>
                    {trans('market.resolutionDate')} —&nbsp;
                </span>
                <span className={s['market-header__resolution-date-stamp']}>
                    {formatResolutionDate(market.resolutionDate)}
                </span>
            </span>
        </header>
    );
}
