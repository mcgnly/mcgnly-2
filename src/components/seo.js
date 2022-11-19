/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}>


      {/* <!-- VISA Tracking Code for www.mcgnly.com --> */}
      <script>
      {(function (v, i, s, a) {
        if (!v._visaSettings) {
          v._visaSettings = {}
        }
        v._visaSettings["d9d759b4-f127-11ea-b589-901b0edac50a"] = {
          v: "0.3",
          s: "d9d759b4-f127-11ea-b589-901b0edac50a",
          a: "1",
        }
        var _v = i.getElementsByTagName("head")[0]
        var _a = _v
        var _i = i.createElement("script")
        var _s = _i
        _s.defer = "defer"
        _s.src =
          s + a + v._visaSettings["d9d759b4-f127-11ea-b589-901b0edac50a"].v
        _a.appendChild(_s)
      })(
        window,
        document,
        "//app-worker.visitor-analytics.io/main",
        ".js?s=d9d759b4-f127-11ea-b589-901b0edac50a&v="
      )}
    </script>
    {/* <!-- VISA Tracking Code for www.mcgnly.com --> */}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
