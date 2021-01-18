import React, { ReactElement } from 'react';

import Switch from '@material-ui/core/Switch';

import s from './OptionSwitch.module.scss';

interface Props {
    labelA: string;
    labelB: string;
}

export default function OptionSwitch({
    labelA,
    labelB
}: Props): ReactElement {
    return (
        <span className={s.root}>
            <span>{labelA}</span>
            <Switch />
            <span>{labelB}</span>
        </span>
    );
}
