import React, { ReactElement } from 'react';
import classnames from 'classnames';

import MarketInfoCard from '../../components/MarketInfoCard';
import { MarketViewModel } from '../../models/Market';

import s from './MarketResolutionCard.module.scss';
import { Link } from 'react-router-dom';

interface Props {
    href: string;
    market: MarketViewModel;
    className?: string;
}

export default function MarketResolutionCard({
    market,
    href,
    className = '',
}: Props): ReactElement {
    return (
        <Link to={href} className={classnames(s.root, className)}>
            <MarketInfoCard market={market} />
        </Link>
    );
}
