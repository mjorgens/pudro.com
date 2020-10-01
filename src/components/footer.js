import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import '../styles/footer.scss'

export default function Footer() {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        author
                    }
                    buildTime(formatString: "YYYY")
                }
            }
        `,
    )

    return (
        <>
            <div className="bottom1" />
            <div className="bottom2" />
            <footer>
                <div className="copyright">
                    <div>&copy;2003-{data.site.buildTime} {data.site.siteMetadata.author}. All Rights Reserved.</div>
                    <div><Link to={'/privacy/'}>privacy policy</Link> | <Link to={'/terms/'}>terms of use</Link></div>
                </div>
            </footer>
        </>
    )
}
