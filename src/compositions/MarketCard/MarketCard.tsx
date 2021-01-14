import React from 'react';
import classnames from 'classnames';

import { MarketViewModel } from '../../models/Market';
import MarketInfoCard from '../../components/MarketInfoCard';

import s from './MarketCard.module.scss';
import MarketOpinionCard from '../MarketOpinionCard';

interface Props {
    market: MarketViewModel;
    className?: string;
    href: string;
}

export default function MarketCard({
    market,
    href,
    className = '',
}: Props) {
    return (
        <a href={href} className={classnames(s.root, className)}>
            <MarketInfoCard market={market} className={s.infoCard} />
            <MarketOpinionCard market={market} />
        </a>
    );
}
