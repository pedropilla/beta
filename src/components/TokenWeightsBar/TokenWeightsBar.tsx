import React, { ReactElement } from 'react';
import classnames from 'classnames';

import { getColorForOutcome } from '../../utils/getColorForOutcome';

import s from './TokenWeightsBar.module.scss';

interface Props {
    weights: number[];
    className?: string;
}

export default function TokenWeightsBar({
    weights,
    className = '',
}: Props): ReactElement {
    return (
        <div className={classnames(s['token-weights-bar'], className)}>
            {weights.map((weight, index) => (
                <span
                    key={index}
                    className={s['token-weights-bar__weight']}
                    style={{
                        width: `${weight}%`,
                        backgroundColor: getColorForOutcome(index),
                    }}
                />
            ))}
        </div>
    );
}
