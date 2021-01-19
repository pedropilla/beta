import React, { ReactElement } from 'react';

import Switch from '@material-ui/core/Switch';

import s from './OptionSwitch.module.scss';

interface Props {
    labelA: string;
    labelB: string;
    onChange: (checked: boolean) => void;
    value?: boolean;
}

export default function OptionSwitch({
    labelA,
    labelB,
    onChange,
    value,
}: Props): ReactElement {
    return (
        <span className={s.root}>
            <span>{labelA}</span>
            <Switch value={value} onChange={(_, checked) => onChange(checked)} />
            <span>{labelB}</span>
        </span>
    );
}
