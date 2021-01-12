import React from 'react';

import s from './Button.module.scss';

type HTMLButtonProps = JSX.IntrinsicElements['button'];

interface ButtonProps extends HTMLButtonProps {

}

export default function Button({
    className = '',
    children,
    ...props
}: ButtonProps) {
    return (
        <button className={`${s.button} ${className}`} {...props}>{children}</button>
    );
}
