import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Container, Badge, Col, Row } from "react-bootstrap"

const ProjectLink = ({ excerpt, featuredImages, tags, title, to, windowWidth }) => {
  let component
  if (windowWidth > 750) {
    component = 
      <Container className="text-center">
        <Link to={to} style={{ textDecoration: "none" }}>
          <Row>
            {featuredImages &&
              featuredImages.map(image => (
                <Col key={image.src}>
                  <Img fluid={image}/>
                </Col>
              ))}
          </Row>
          <h2 className="mt-5">{title}</h2>
        </Link>
        {tags.map(tag => (
          <Badge key={tag} pill variant="dark" className="px-2 mr-1">
            {tag}
          </Badge>
        ))}
        <p className="pt-3 text-justify">{excerpt}</p>
      </Container>
  }
  else {
    component = 
      <Container className="text-center p-0 m-0">
        <Link to={to} style={{ textDecoration: "none" }}>
          <Row>
            {featuredImages &&
              featuredImages.map(image => (
                <Col key={image.src}>
                  <Img fluid={image}/>
                </Col>
              ))}
          </Row>
          <h2 className="mt-5">{title}</h2>
        </Link>
        {tags.map(tag => (
          <Badge key={tag} pill variant="dark" className="px-2 mr-1">
            {tag}
          </Badge>
        ))}
        <p className="pt-3 text-justify">{excerpt}</p>
      </Container>
  }
  return (
    component
  )
}

export default ProjectLink;
