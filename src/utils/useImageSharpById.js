import { graphql, useStaticQuery } from 'gatsby';

const useImageSharpById = (id) => {
  const { allImageSharp } = useStaticQuery(
    graphql`
      query allImageSharp {
        allImageSharp {
          nodes {
            id
            fluid {
              ...GatsbyImageSharpFluid
              presentationHeight
              presentationWidth
            }
          }
        }
      }
    `
  )

  return allImageSharp.nodes.find(node => node.id === id);
}

export default useImageSharpById;


