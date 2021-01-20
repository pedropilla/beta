import React, { ReactElement } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

import s from './TokenSwapperLoader.module.scss';

export default function TokenSwapperLoader(): ReactElement {
    return (
        <div>
            <Skeleton height={106} className={s.skeleton} />
            <Skeleton height={106} className={s.skeleton} />
            <Skeleton height={130} className={s.skeleton} />
            <Skeleton height={60} className={s.skeleton} />
        </div>
    );
}
