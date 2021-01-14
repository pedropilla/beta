import React, { ReactElement } from 'react';
import classnames from 'classnames';

import { MarketViewModel } from '../../models/Market';
import trans from '../../translation/trans';
import getCategoryInfo from '../../utils/getCategoryInfo';
import { formatResolutionDate } from '../../services/MarketService';

import s from './MarketInfoCard.module.scss';

interface Props {
    market: MarketViewModel;
    className?: string;
}

export default function MarketInfoCard({
    market,
    className = '',
}: Props): ReactElement {
    const categoryInfo = getCategoryInfo(market.category);

    return (
        <div className={classnames(s.root, className)} style={{ backgroundColor: categoryInfo.color }}>
            <div>
                <span className={s.categoryTitle}>{categoryInfo.title}</span>
                <h2 className={s.title}>{market.description}</h2>
            </div>
            <img className={s.bubble} src={categoryInfo.circleIcon} alt={market.category} />
            <div className={s.resolutionInfo}>
                <span>{trans('market.resolutionDate')} <strong>{formatResolutionDate(market.resolutionDate)}</strong></span>
            </div>
        </div>
    );
}
