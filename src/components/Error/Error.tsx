import React from 'react';

import s from './Error.module.scss';

interface Props {
    error?: string;
}

export default function Error({
    error,
}: Props) {
    return (
        error ? <p className={s.error}>{error}</p> : null
    );
}
