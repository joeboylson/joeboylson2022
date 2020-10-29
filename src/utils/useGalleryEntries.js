import { graphql, useStaticQuery } from 'gatsby';

const useGalleryImages = () => {
  const { allGalleryJson } = useStaticQuery(
    graphql`
      query allGalleryJson {
        allGalleryJson {
          nodes {
            description
            url {
              childImageSharp {
                id
                fluid {
                  srcSet
                  presentationHeight
                  presentationWidth
                }
              }
            }
          }
        }
      }
    `
  )

  return allGalleryJson.nodes;
}

export default useGalleryImages;