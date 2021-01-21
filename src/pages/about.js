import React, { useContext } from "react"
import { PageLayout, PageTitle } from "../components"
import { SEO, ThemeContext } from "../utils"
import Timeline from "../components/Timeline"

export default () => {
  const { windowWidth } = useContext(ThemeContext)

  return (
    <PageLayout>
      <SEO title="My History" />
      <PageTitle title="My History" />
      <Timeline windowWidth={windowWidth}/>
    </PageLayout>
  )
}