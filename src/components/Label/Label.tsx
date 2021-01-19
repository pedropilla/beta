import React, { ReactElement } from 'react';

import s from './Label.module.scss';

interface Props {
    text: string;
}

export default function Label({
    text,
}: Props): ReactElement {
    return (
        <label className={s.root}>{text}</label>
    );
}
