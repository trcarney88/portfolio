import React, { useContext } from "react"
import { graphql } from "gatsby"
import { PageLayout } from "../components"
import { Seo, ThemeContext } from "../utils"
import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Skills from "../components/Skills"


const IndexPage =  ({ data }) => {
  const { firstName, lastName, occupation } = data.site.siteMetadata
  const { windowWidth } = useContext(ThemeContext)
  let component;
  if (windowWidth > 750) {
    console.log("Desktop Version")
    component = 
      <PageLayout>
        <Seo title="Home" />
        <Container className="text-center pt-5 mt-5 vw-100" fluid>
          <Container className="py-0 my-0 vw-100">
            <h1
              style={{
                fontSize: "5rem"
              }}
            >
              <b className="first-name">{firstName}</b>&nbsp;
              <b className="last-name">{lastName}</b>
            </h1>
            <p>
              <i>
                {occupation}
              </i>
            </p>
          </Container>
          <div className="d-md-inline-flex icons-container">
            <a
              href="https://github.com/trcarney88"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={["fab", "github"]}
                className="icons github"
                title="Github"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/todd-carney-56494062/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                className="icons linkedin"
                title="LinkedIn"
              />
            </a>
            <a
              href="mailto:toddcarney44@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={["fas", "envelope"]}
                className="icons mail"
                title="e-mail"
              />
            </a>
            <a href="../../resume.pdf" target="_blank">
              <FontAwesomeIcon
                icon={["fas", "file-alt"]}
                className="icons file"
                title="Resume"
              />
            </a>
          </div>
        </Container>
        <Skills windowWidth={windowWidth}/>
      </PageLayout>
  }
  else {
    console.log("Mobile Version")
    component = 
      <PageLayout>
        <Seo title="Home" />
        <Container className="text-center px-0 mx-0 pt-5 mt-5 vw-100" fluid>
          <Container className="p-0 m-0">
            <h1
              style={{
                fontSize: "3rem"
              }}
            >
              <b className="first-name">{firstName}</b>&nbsp;
              <b className="last-name">{lastName}</b>
            </h1>
            <p>
              <i>
                {occupation}
              </i>
            </p>
          </Container>
          <hr className="my-3 w-25" />
          <div className="d-md-inline-flex icons-container">
            <a
              href="https://github.com/trcarney88"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={["fab", "github"]}
                className="icons github"
                title="Github"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/todd-carney-56494062/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                className="icons linkedin"
                title="LinkedIn"
              />
            </a>
            <a
              href="mailto:toddcarney44@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={["fas", "envelope"]}
                className="icons mail"
                title="e-mail"
              />
            </a>
            <a href="../../resume.pdf" target="_blank">
              <FontAwesomeIcon
                icon={["fas", "file-alt"]}
                className="icons file"
                title="Resume"
              />
            </a>
          </div>
        </Container>
        <Skills windowWidth={windowWidth}/>
      </PageLayout>
  }
  return (
    component
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        firstName
        lastName
        occupation
      }
    }
  }
`

export default IndexPage;