import React, { useContext } from "react"
import { graphql } from "gatsby"
import { PageLayout, PageTitle, WorkHistory } from "../components"
import { Seo, ThemeContext, Utils } from "../utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Container from "react-bootstrap/Container"

const ResumePage = ({ data }) => {
  const history = data.allMarkdownRemark.edges || []
  const images = data.allFile.edges || []
  const imageMap = Utils.getImageMap(images, /\/[work].*\/|$/)

  const { windowWidth } = useContext(ThemeContext)
  let component;

  if (windowWidth > 750) {
    component =
      <PageLayout>
        <Seo title="Resume" />
        <PageTitle title="Resume">
          &nbsp;
          <a href="../../resume.pdf" target="_blank">
            <FontAwesomeIcon
              style={{ fontSize: "2rem" }}
              icon={["fas", "file-alt"]}
              className="icons file"
            />
          </a>
        </PageTitle>
        <Container className="mt-5 pt-3" fluid>
          {history.map(({ node }) => (
            <div key={node.id}>
              <WorkHistory
                frontmatter={node.frontmatter}
                image={imageMap[node.fields.slug]}
                html={node.html}
                windowWidth={windowWidth}
              />
              <hr className="w-75" />
            </div>
          ))}
        </Container>
      </PageLayout>
  }
  else {
    component = 
    <PageLayout>
      <Seo title="Resume" />
      <PageTitle title="Resume">
        &nbsp;
        <a href="../../resume.pdf" target="_blank">
          <FontAwesomeIcon
            style={{ fontSize: "2rem" }}
            icon={["fas", "file-alt"]}
            className="icons file"
          />
        </a>
      </PageTitle>
      <Container className="mt-5 pt-3 px-0.5 mx-0" fluid>
        {history.map(({ node }) => (
          <div key={node.id}>
            <WorkHistory
              frontmatter={node.frontmatter}
              image={imageMap[node.fields.slug]}
              html={node.html}
              windowWidth={windowWidth}
            />
            <hr className="w-75" />
          </div>
        ))}
      </Container>
    </PageLayout>
  }
  return (
    component
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/work/" } }
      sort: { fields: [frontmatter___startDate], order: DESC }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            company
            location
            position
            tags
            startDate(formatString: "MMMM, YYYY")
            endDate(formatString: "MMMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
    allFile(
      filter: {
        extension: { eq: "png" }
        relativePath: { regex: "/company/" }
        relativeDirectory: { regex: "/content/work/" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
          relativePath
        }
      }
    }
  }
`

export default ResumePage;