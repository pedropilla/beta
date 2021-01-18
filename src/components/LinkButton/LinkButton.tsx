import React, { PropsWithChildren } from 'react';

import classnames from 'classnames';

import s from './LinkButton.module.scss';
import { Link } from 'react-router-dom';

interface Props {
    href: string;
    className?: string;
}

export default function LinkButton({
    children,
    href,
    className = '',
    ...props
}: PropsWithChildren<Props>) {
    return (
        <Link to={href} className={classnames(s['link-button'], className)}>
            {children}
        </Link>
    );
}
