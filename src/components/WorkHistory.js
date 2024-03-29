import React from "react"
import Img from "gatsby-image"
import { Container, Row, Col, Badge } from "react-bootstrap"

const CompanyCard = ({ frontmatter, image }) => {
  let { company, position, startDate, endDate, location } = frontmatter
  
  if (endDate === null){
    endDate = "Present"
  }

  return (
    <Container fluid className="m-auto work-history">
      <Img
        fluid={image}
        style={{
          maxHeight: "15vmax",
          maxWidth: "15vmax",
        }}
        className="m-auto"
      />
      <div className="md-font">
        <h2 className="m-auto pt-2">{company}</h2>
        <h5 className="text-muted">{location}</h5>
        <h4 className="mt-2">{position}</h4>
        <h5 className="text-muted mt-2">
          {startDate} - {endDate}
        </h5>
      </div>
    </Container>
  )
}

const WorkHistory = ({ html, frontmatter, image, windowWidth }) => {
  let component;
  if (windowWidth > 750) {
    component = 
      <Container className="p-1 project-link text-center">
        <Row>
          <Col className="col-md-4 col-12">
            <CompanyCard frontmatter={frontmatter} image={image} />
          </Col>
          <Col className="col-md-8 col-12">
            <p
              className="mt-2 markDownText"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Col>
        </Row>
        <Row>
          <Col className="col-md-4 col-1"></Col>
          <Col className="col-md-8 col-1">
            <div className="d-inline-block">
              {frontmatter.tags.map(tag => (
                <Badge key={tag} pill className="mr-2 p-0 m-1 px-3 resume-tags">
                  <h4>
                    <small class="workTag">{tag}</small>
                  </h4>
                </Badge>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
  }
  else {
    component = 
      <Container className="p-1 project-link text-center">
        <Row>
          <Col className="col-md-4 col-12">
            <CompanyCard frontmatter={frontmatter} image={image} />
          </Col>
          <Col className="col-md-8 col-12">
            <p
              className="markDowntext mt-2"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Col>
        </Row>
      </Container>
  }
  return (
    component
  )
}

export default WorkHistory;