import React, { ReactElement } from 'react';
import classnames from 'classnames';

import s from './MarketStatistics.module.scss';

interface Props {
    className?: string;
}

export default function MarketStatistics({
    className = '',
}: Props): ReactElement {
    return (
        <div className={classnames(s['market-statistics'], className)}>

        </div>
    )
}
