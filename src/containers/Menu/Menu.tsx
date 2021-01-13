import React, { ReactElement } from "react";
import classnames from 'classnames';
import { useDarkModeThemeContext } from "../../utils/hooks/useDarkModeTheme";

import fluxLogoBlack from '../../assets/images/flux-logo-black.svg';
import fluxLogoWhite from '../../assets/images/flux-logo-white.svg';


import s from './Menu.module.scss';
import Button from "../../components/Button";
import trans from "../../translation/trans";

interface Props {
    className?: string;
}

export default function Menu({
    className = ''
}: Props): ReactElement {
    const { theme } = useDarkModeThemeContext();

    return (
        <header className={s.menu}>
            <div className={s.menu__items}>
                <div className={s.menu__item}>
                    <a href="/">
                        <img className={s.menu__logo} src={theme === 'light' ? fluxLogoBlack : fluxLogoWhite} alt="Flux home" />
                    </a>
                </div>
                <div className={s.menu__item} />
                <div className={classnames(s.menu__item, s['menu__last-item'])}>
                    <Button>{trans('auth.login')}</Button>
                </div>
            </div>
        </header>
    );
}
