import React from 'react';
import classnames from 'classnames';

import { MarketCategory } from '../../models/Market';
import getCategoryInfo from '../../utils/getCategoryInfo';

import s from './Tag.module.scss';

interface Props {
    category: MarketCategory;
    className?: string;
}

export default function Tag({
    category,
    className = '',
}: Props) {
    const categoryInfo = getCategoryInfo(category);

    return (
        <div className={classnames(s.root, className)}>
            <span className={s.title}>{categoryInfo.title}</span>
            <img src={categoryInfo.icon} alt={categoryInfo.title} className={s.icon} />
        </div>
    );
}
