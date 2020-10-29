import { graphql, useStaticQuery } from 'gatsby';

const useProjectEntries = () => {
  const { allProjectsJson } = useStaticQuery(
    graphql`
      query allProjectsJson( $maxWidth: Int = 10000) {
        allProjectsJson {
          nodes {
            description
            medium
            name
            links {
              text
              url
            }
            image {
              childImageSharp {
                id
                fluid(maxWidth: $maxWidth) {
                  srcSet
                  presentationHeight
                  presentationWidth
                }
              }
            }
          }
        }
      }
    `)

  return allProjectsJson.nodes;
}

export default useProjectEntries;