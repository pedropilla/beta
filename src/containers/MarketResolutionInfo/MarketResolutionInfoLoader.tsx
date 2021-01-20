import React, { ReactElement } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

import s from './MarketResolutionInfoLoader.module.scss';

export default function MarketResolutionInfoLoader(): ReactElement {
    return (
        <div>
            <Skeleton height={200} className={s.skeleton} />
        </div>
    );
}
