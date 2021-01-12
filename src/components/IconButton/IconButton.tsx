import React, { ReactElement } from 'react';

import classnames from 'classnames';

import s from './IconButton.module.scss';

type HTMLButtonProps = JSX.IntrinsicElements['button'];

interface Props extends HTMLButtonProps {
    icon: string;
    alt: string;
}


export default function IconButton({
    icon,
    alt,
    className = '',
    ...props
}: Props): ReactElement {
    return (
        <button {...props} className={classnames(s['icon-button'], className)}>
            <img src={icon} alt={alt} />
        </button>
    );
}
