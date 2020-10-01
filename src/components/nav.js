import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import '../styles/nav.scss'

export default function Nav() {
    const data = useStaticQuery(
        graphql`
            query {
                allMdx(filter: {frontmatter: {nav: {eq: true}}}, sort: {order: ASC, fields: frontmatter___nav_order}) {
                    edges {
                        node {
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                            }
                        }
                    }
                }
            }
        `,
    )

    return (
        <nav>
            <ul>
                {data.allMdx.edges.map((edge, i) => (
                    <li key={i}>
                        <Link to={edge.node.fields.slug}>
                            {edge.node.frontmatter.title ? edge.node.frontmatter.title : 'Home'}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
