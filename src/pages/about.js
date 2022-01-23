import React, { useContext } from "react"
import { PageLayout, PageTitle } from "../components"
import { Seo, ThemeContext } from "../utils"
import Timeline from "../components/Timeline"

const AboutPage = () => {
  const { windowWidth } = useContext(ThemeContext)

  return (
    <PageLayout>
      <Seo title="My History" />
      <PageTitle title="My History" />
      <Timeline windowWidth={windowWidth}/>
    </PageLayout>
  )
}

export default AboutPage;