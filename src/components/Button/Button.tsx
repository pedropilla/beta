import React from 'react';
import { default as MuiButton } from '@material-ui/core/Button';

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
        <MuiButton className={`${s.button} ${className}`}>{children}</MuiButton>
    );
}
