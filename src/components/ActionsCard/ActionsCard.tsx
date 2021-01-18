import React, { PropsWithChildren, ReactElement } from 'react';
import classnames from 'classnames';

import s from './ActionCard.module.scss';

interface Props {
    className?: string;
}

export default function ActionsCard({
    children,
    className = '',
}: PropsWithChildren<Props>): ReactElement {
    return (
        <div className={classnames(s.root, className)}>
            {children}
        </div>
    );
}
