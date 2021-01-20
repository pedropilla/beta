import React, { ReactElement } from "react";
import Skeleton from '@material-ui/lab/Skeleton';

import s from './MarketHeaderLoader.module.scss';

export default function MarketHeaderLoader(): ReactElement {
    return (
        <div className={s.root}>
            <div className={s.wrapper}>
                <Skeleton height={300} className={s.skeleton} />
            </div>
        </div>
    );
}
