import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "glasses-long.png" }) {
          childImageSharp {
            fluid(quality: 95, maxWidth: 4000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        mobileImage: file(relativePath: { eq: "glasses-short.png" }) {
          childImageSharp {
            fluid(maxWidth: 700, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}

    render={data => {
      // Set ImageData.
      const imageData = [
      data.desktop.childImageSharp.fluid,
        {
          ...data.mobileImage.childImageSharp.fluid,
          media: `(max-width: 700px)`,
        },
      ]

      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
          style={{
            height: '300px',
            backgroundAttachment: 'fixed',
            backgroundSize: "auto 300px",
            backgroundPositionY: '35px',
            backgroundPositionX: 'right',
            paddingTop: '30px',
            display: 'flex',
            justifyContent: 'start',
            backgroundColor: '#bccdea'
          }}
        >
          {children}
        </BackgroundImage>
      )
    }}
  />
)

export default BackgroundSection
