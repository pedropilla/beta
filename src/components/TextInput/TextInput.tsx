import React, { ReactElement } from 'react';
import TextField from '@material-ui/core/TextField';

import s from './TextInput.module.scss';

interface Props {
    multiline?: boolean;
    onChange?: (value: string) => void;
    value?: string;
    required?: boolean;
}

export default function TextInput({
    multiline,
    value,
    required,
    onChange = () => {},
}: Props): ReactElement {
    return (
        <TextField
            id="outlined-multiline-flexible"
            multiline={multiline}
            variant="outlined"
            className={s.root}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            required={required}
        />
    );
}
