import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Nav from './nav'
import Logo from '../../static/img/logo.svg'
import '../styles/header.scss'

export default function Header() {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `,
    )

    return (
        <header>
            <div className="brand">
                <img src={Logo} alt={data.site.siteMetadata.title} />
                {data.site.siteMetadata.title}
            </div>
            <div className="top" />
            <Nav />
        </header>
    )
}
