import React, { ReactElement } from "react";
import classnames from 'classnames';
import { Link } from "react-router-dom";

import fluxLogoBlack from '../../assets/images/flux-logo-black.svg';
import fluxLogoWhite from '../../assets/images/flux-logo-white.svg';
import { useDarkModeThemeContext } from "../../utils/hooks/useDarkModeTheme";
import Button from "../../components/Button";
import trans from "../../translation/trans";

import s from './Menu.module.scss';
interface Props {
    className?: string;
}

export default function Menu({
    className = ''
}: Props): ReactElement {
    const { theme } = useDarkModeThemeContext();

    return (
        <header className={classnames(s.menu, className)}>
            <div className={s.menu__items}>
                <div className={s.menu__item}>
                    <Link to="/">
                        <img className={s.menu__logo} src={theme === 'light' ? fluxLogoBlack : fluxLogoWhite} alt="Flux home" />
                    </Link>
                </div>
                <div className={s.menu__item} />
                <div className={classnames(s.menu__item, s['menu__last-item'])}>
                    <Button>{trans('auth.login')}</Button>
                </div>
            </div>
        </header>
    );
}
