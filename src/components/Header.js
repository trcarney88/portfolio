import React from "react"
import { Container } from "react-bootstrap"
import Navbar from "./Navbar"

export default ({windowWidth}) => {
  
  return(
    <Container fluid className="px-0">
      <Navbar windowWidth={windowWidth}/>
    </Container>
  )
}
