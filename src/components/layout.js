import React from 'react';

import Header  from './header';
import Footer  from './footer';

import '../styles/index.scss';
import LayoutStyles from './layout.module.scss';

const {container, content} = LayoutStyles;

const Layout = ({children}) => {
    return (
        <div className={container}>
            <div className={content}>
                <Header />
                {children}
            </div>
            <Footer />
        </div>
    )
}
export default Layout;