import React from 'react';
import trans from '../../translation/trans';


export default function MarketClosed() {
    return (
        <div>
            <p>{trans('marketClosed.description')}</p>
        </div>
    );
}
