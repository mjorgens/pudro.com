/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Pudro Design',
    email: 'marc@pudro.com',
    description: 'Web Design and Development',
    siteUrl: 'https://pudro.com',
    author: 'Marc Jorgensen',
    google_site_verification: 't0r3ZdGCSzv-0CH3Lq_rrLjRwfpfo7uYej3i08odF-8',
    phone: '(801) 448-6272'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: 'UA-2330698-1',
        head: true,
        anonymize: true
      }
    },
    {
      resolve: `gatsby-plugin-next-seo`,
      options: {
        language: 'en',
        openGraph: {
          type: 'website',
          locale: 'en_US'
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`]
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`
  ]
};
