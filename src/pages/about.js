import React from "react"
import { PageLayout, PageTitle } from "../components"
import { SEO } from "../utils"
import Timeline from "../components/Timeline"

export default () => {
  
  return (
    <PageLayout>
      <SEO title="My History" />
      <PageTitle title="My History" />
      <Timeline/>
    </PageLayout>
  )
}