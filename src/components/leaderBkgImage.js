import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "glasses-sharp.jpg" }) {
          childImageSharp {
            fluid(quality: 95, maxWidth: 2500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
          imgStyle={{ objectFit: 'contain' }}
          style={{
            height: '300px',
            backgroundAttachment: 'fixed',
            backgroundSize: "contain",
            backgroundPositionY: '35px',
            backgroundPositionX: 'right',
            paddingTop: '30px',
            display: 'flex',
            justifyContent: 'start',
          }}
        >
          {children}
        </BackgroundImage>
      )
    }}
  />
)

export default BackgroundSection