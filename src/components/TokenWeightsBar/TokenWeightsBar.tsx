import React, { ReactElement } from 'react';

import classnames from 'classnames';

import s from './TokenWeightsBar.module.scss';

interface Props {
    weights: number[];
}

export default function TokenWeightsBar({
    weights,
}: Props): ReactElement {
    return (
        <div className={s['token-weights-bar']}>
            {weights.map((weight, index) => (
                <span
                    className={classnames(s['token-weights-bar__weight'], s[`token-weights-bar__weight--c-${index}`])}
                    style={{ width: `${weight}%` }}
                />
            ))}
        </div>
    );
}
