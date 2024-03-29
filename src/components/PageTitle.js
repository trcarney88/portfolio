import React from "react"

const PageTitle = ({ title, children }) => (
  <h1 className="bg-none pt-5 mb-5 pb-0">
      {title}&nbsp;<span>{children}</span>&nbsp;
  </h1>
)

export default PageTitle;