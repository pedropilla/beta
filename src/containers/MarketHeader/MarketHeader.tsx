import React from 'react';
import classnames from 'classnames';
import LinkButton from '../../components/LinkButton';
import { Market } from '../../models/Market';
import { formatResolutionDate } from '../../services/MarketService';
import trans from '../../translation/trans';

import s from './MarketHeader.module.scss';
import TokenWeightsBar from '../../components/TokenWeightsBar';

interface Props {
    market: Market;
    className?: string;
}

export default function MarketHeader({
    market,
    className = '',
}: Props) {
    return (
        <header className={classnames(s['market-header'], className)}>
            <div className={s['market-header__wrapper']}>
                <div>
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
                </div>
                <div>
                    <TokenWeightsBar weights={[12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5]} />
                    <TokenWeightsBar weights={[]} />
                </div>
            </div>
        </header>
    );
}
