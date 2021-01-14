import React, { ReactElement } from 'react';
import { default as MuiIconButton } from '@material-ui/core/IconButton';
import classnames from 'classnames';

import s from './IconButton.module.scss';

interface Props {
    icon: string;
    alt: string;
    onClick: () => void;
    className?: string;
}


export default function IconButton({
    icon,
    alt,
    onClick,
    className = '',
}: Props): ReactElement {
    return (
        <MuiIconButton onClick={onClick} className={classnames(s['icon-button'], className)}>
            <img src={icon} alt={alt} />
        </MuiIconButton>
    );
}
