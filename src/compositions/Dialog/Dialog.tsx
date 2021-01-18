import React, { PropsWithChildren } from 'react';
import { default as MuiDialog } from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import Button from '../../components/Button';

import s from './Dialog.module.scss';
import trans from '../../translation/trans';

interface Props {
    title: string;
}

export default function Dialog({
    title,
    children,
}: PropsWithChildren<Props>) {
    return (
        <MuiDialog open classes={{ paper: s.paper }}>
            <DialogTitle>
                {title}
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions>
                <Button className={s.cancelButton}>
                    {trans('global.action.cancel')}
                </Button>
                <Button type="submit" className={s.confirmButton}>
                    {trans('global.action.submit')}
                </Button>
            </DialogActions>
        </MuiDialog>
    );
}
