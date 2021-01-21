import React, { useContext } from "react"
import { Container } from "react-bootstrap"
import Header from "./Header"
import Footer from "./Footer"
import { ThemeContext } from "../utils"

export default ({ children }) => {
  const { dark, windowWidth } = useContext(ThemeContext);

  return(
    <Container fluid className="px-0 theme-light app-container vw-100">
      <Header windowWidth={windowWidth}/>
      <Container fluid className="px-0 mx-0 pt-5 mt-5 text-center min-vh-100">
        {children}
      </Container>
      <Footer />
    </Container>
  )
}
