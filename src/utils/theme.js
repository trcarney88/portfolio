import React, { Component } from "react"

const defaultState = {
  dark: false,
  toString: () => `light`,
  toggleDark: () => {},
}

const ThemeContext = React.createContext(defaultState)

class ThemeProvider extends Component {
  state = {
    dark: false,
    windowWidth: window.innerWidth
  }

  toString = () => (this.state.dark ? `dark` : `light`)

  toggleDark = () => {
    let dark = !this.state.dark
    this.setState({ dark })
  }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth});
    console.log("Window Width: " + this.state.windowWidth)
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize)
  }

  render() {
    const { children } = this.props
    const { dark, windowWidth } = this.state
    return (
      <ThemeContext.Provider
        value={{
          dark,
          toggleDark: this.toggleDark,
          toString: this.toString,
          windowWidth
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContext

export { ThemeProvider }
