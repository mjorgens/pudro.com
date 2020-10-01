import { MDXProvider } from '@mdx-js/react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import React from 'react'
import Layout from '../components/layout'

export default function PageTemplate({ data }) {
    const { author, phone, email, description: siteDescription, title: siteTitle, siteUrl, google_site_verification } = data.site.siteMetadata
    const { title, description } = data.mdx.frontmatter
    const { slug } = data.mdx.fields

    const shortcodes = { Link }

    return (
        <>
            <GatsbySeo
                title={title ? title + ' | ' + siteTitle : siteTitle + ' | ' + siteDescription}
                description={description ? description : siteDescription}
                canonical={siteUrl + slug}
                metaTags={[
                    { name: 'author', content: author },
                    { name: 'google-site-verification', content: google_site_verification },
                ]}
                openGraph={{
                    url: siteUrl + slug,
                    description: (description ? description : siteDescription),
                    title: (title ? title + siteTitle : siteTitle),
                    site_name: siteTitle,
                }} />
            <Layout>
                <h1>{title ? title : siteDescription}</h1>
                <MDXProvider components={shortcodes}>
                    <MDXRenderer author={author} phone={phone} email={email} title={siteTitle} url={siteUrl}>
                        {data.mdx.body}
                    </MDXRenderer>
                </MDXProvider>
            </Layout>
        </>
    )
}

export const query = graphql`
    query($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            body
            frontmatter {
                title
                description
            }
            fields {
                slug
            }
        }
        site(siteMetadata: {}) {
            siteMetadata {
                author
                description
                phone
                email
                title
                siteUrl
                google_site_verification
            }
            buildTime
        }
    }
`
