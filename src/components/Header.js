import React from "react"
import { Container } from "react-bootstrap"
import Navbar from "./Navbar"

const Header = ({windowWidth}) => {
  
  return(
    <Container fluid className="px-0">
      <Navbar windowWidth={windowWidth}/>
    </Container>
  )
}

export default Header;