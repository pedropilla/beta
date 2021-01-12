import React from 'react';

import classnames from 'classnames';

import s from './LinkButton.module.scss';

type HTMLAHrefProps = JSX.IntrinsicElements['a'];

interface ButtonProps extends HTMLAHrefProps {

}

export default function LinkButton({
    children,
    className = '',
    ...props
}: ButtonProps) {
    return (
        <a {...props} className={classnames(s['link-button'], className)}>
            {children}
        </a>
    );
}
