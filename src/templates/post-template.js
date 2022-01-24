import React from "react"
import Container from "react-bootstrap/Container"
import { PageLayout, PageTitle } from "../components"

import Seo from "../utils/seo"

const PostTemplate = ({ title, excerpt, html, subTitle }) => (
  <PageLayout>
    <Seo title={title} description={excerpt} />
    <Container className="text-center" fluid>
      <PageTitle title={title} />
      {subTitle}
      <Container className="markDownText">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Container>
  </PageLayout>
)

export default PostTemplate;