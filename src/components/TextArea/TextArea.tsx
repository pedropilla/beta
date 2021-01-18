import React, { ReactElement } from 'react';
import TextField from '@material-ui/core/TextField';

import s from './TextArea.module.scss';

export default function TextArea(): ReactElement {
    return (
        <TextField
            id="outlined-multiline-flexible"
            multiline
            variant="outlined"
            className={s.root}
        />
    );
}
