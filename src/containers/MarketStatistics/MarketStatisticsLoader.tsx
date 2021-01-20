import React, { ReactElement } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

import s from './MarketStatisticsLoader.module.scss';

export default function MarketStatisticsLoader(): ReactElement {
    return (
        <Skeleton height={400} className={s.skeleton} />
    );
}
