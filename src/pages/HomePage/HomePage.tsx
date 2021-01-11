import React from 'react';
import Helmet from 'react-helmet';
import trans from '../../translation/trans';


export default function HomePage() {
    return (
        <main>
            <Helmet>
                <title>{trans('page.home.title')}</title>
            </Helmet>
        </main>
    );
}
