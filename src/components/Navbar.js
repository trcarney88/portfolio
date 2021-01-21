import React, { useContext } from "react"
import ThemeContext from "../utils/theme"
import { Navbar, Nav, Form } from "react-bootstrap"
import { Link } from "gatsby"
import "./Fontawesome.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({windoWidth}) => {
  const { dark, toggleDark, toString } = useContext(ThemeContext)
  let component;
  if (windowWidth > 750) {
    component =
      <Navbar variant={toString()} fixed="top" collapseOnSelect expand="md">
        <Navbar.Brand className="pl-5 ml-5" as={Link} to="/">
          <p>
            <b className="logo logo-t">T</b>
            <b className="logo logo-r">R</b>
            <b className="logo logo-c">C</b>
          </p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="pr-3 mr-4 nav-links">
            <Nav.Link className="ml-2" as={Link} to="/about" title="About">
              About
            </Nav.Link>
            <Nav.Link className="ml-2" as={Link} to="/projects" title="Projects">
              Projects
            </Nav.Link>
            <Nav.Link className="ml-2" as={Link} to="/resume" title="Resume">
              Resume
            </Nav.Link>
            <Form className="ml-3 my-auto">
              <Form.Check
                type="switch"
                id="custom-switch"
                label=""
                title="Toggle Theme"
                checked={dark}
                onChange={toggleDark}
              />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  }
  else {
    component =
      <Navbar variant={toString()} fixed="top" collapseOnSelect expand="md" className="vw-100">
        <Navbar.Brand className="pl-0 ml-0" as={Link} to="/">
          <p>
            <b className="logo logo-t">T</b>
            <b className="logo logo-r">R</b>
            <b className="logo logo-c">C</b>
          </p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="pr-3 mr-4 nav-links">
            <Nav.Link className="ml-2" as={Link} to="/about" title="About">
              About
            </Nav.Link>
            <Nav.Link className="ml-2" as={Link} to="/projects" title="Projects">
              Projects
            </Nav.Link>
            <Nav.Link className="ml-2" as={Link} to="/resume" title="Resume">
              Resume
            </Nav.Link>
            <Form className="ml-3 my-auto">
              <Form.Check
                type="switch"
                id="custom-switch"
                label=""
                title="Toggle Theme"
                checked={dark}
                onChange={toggleDark}
              />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  }
  return (
    component
  )
}
