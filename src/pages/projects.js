import React from "react";
import { useContext } from "react";
import { graphql } from "gatsby"
import { PageLayout, PageTitle, ProjectLink } from "../components"
import { Seo, ThemeContext, Utils } from "../utils"
import Container from "react-bootstrap/Container"

const Projects =  ({ data }) => {
  const allProjects = data.allMarkdownRemark.edges || []
  const allFeaturedImages = data.allFile.edges || []
  const regex = /\/[projects].*\/|$/
  const featuredImageMap = Utils.getImageMap(allFeaturedImages, regex, true, 3)
  const { windowWidth } = useContext(ThemeContext)

  let component
  if (windowWidth > 750) {
    component = 
      <PageLayout>
        <Seo title="Projects" />
        <PageTitle title="Projects" />
        <Container className="text-left">
          <section>
            {allProjects.map(({ node }) => (
              <div key={node.id} className="p-3">
                <ProjectLink
                  to={node.fields.slug}
                  featuredImages={featuredImageMap[node.fields.slug]}
                  title={node.frontmatter.title}
                  tags={node.frontmatter.tags}
                  excerpt={node.excerpt}
                />
                <hr />
              </div>
            ))}
          </section>
        </Container>
      </PageLayout>
  }
  else {
    component =
      <PageLayout>
        <Seo title="Projects" />
        <PageTitle title="Projects" />
        <Container className="text-left p-0 m-0">
          <section>
            {allProjects.map(({ node }) => (
              <div key={node.id} className="p-3">
                <ProjectLink
                  to={node.fields.slug}
                  featuredImages={featuredImageMap[node.fields.slug]}
                  title={node.frontmatter.title}
                  tags={node.frontmatter.tags}
                  excerpt={node.excerpt}
                  windowWidth = {windowWidth}
                />
                <hr />
              </div>
            ))}
          </section>
        </Container>
      </PageLayout>
  }
  return (
    component
  )
}
export default Projects;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            description
            tags
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    allFile(
      filter: {
        extension: { eq: "png" }
        relativePath: { regex: "/feature/" }
        relativeDirectory: { regex: "/content/projects/" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
          relativePath
        }
      }
    }
  }
`
