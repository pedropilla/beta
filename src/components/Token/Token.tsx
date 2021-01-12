import React, { ReactElement } from 'react';
import classnames from 'classnames';

import s from './Token.module.scss';
import generateTokenName from './generateTokenName';

interface Props {
    className?: string;
    tokenName: string;
}

export default function Token({
    tokenName,
    className = '',
}: Props): ReactElement {
    return (
        <div className={classnames(s.token, className)}>
            {generateTokenName(tokenName)}
        </div>
    );
}
