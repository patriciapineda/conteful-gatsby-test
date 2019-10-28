import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

// import './header.module.scss';
import headerStyles from '../components/header.module.scss';

const { header, title, navList, activeLink } = headerStyles;

const Header = () => {
    const queryData = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <header className={header}>
            <Link to="/" className={title}>
                <h1>{queryData.site.siteMetadata.title}</h1>
            </Link>
            <nav className={navList}>
                <ul>
                    <li>
                        <Link to="/" activeClassName={activeLink}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" activeClassName={activeLink}>
                            About 
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" activeClassName={activeLink}>
                            Contact 
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" activeClassName={activeLink}>
                            Blog 
                        </Link>
                    </li>
                </ul>               
            </nav> 
            <hr />
        </header>
    )
}
export default Header;