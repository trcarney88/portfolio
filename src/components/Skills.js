import React from "react"
import { Container, Image } from "react-bootstrap"

const Skills = ({windowWidth}) => {
    let component;
    if (windowWidth > 750) {
        component = 
            <Container className="text-center pt-5 mt-5" fluid>
                <h2>Skills</h2>
                <div className="d-md-inline-flex">
                    <div className="column">
                        <Image 
                            rounded
                            width="70"
                            height="70"
                            src={`../../icons/Python-logo.svg`}
                            alt="Python"
                        />
                    </div>
                    <div className="column">
                        <Image 
                            rounded
                            width="75"
                            height="75"
                            src={`../../icons/C_Sharp_logo.svg`}
                            alt="C Sharp"
                        />
                    </div>
                    <div className="column">
                        <Image 
                            rounded
                            width="70"
                            height="70"
                            src={`../../icons/cpp_logo.svg`}
                            alt="C plus plus"
                        />
                    </div>
                    <div className="column">
                        <Image 
                            rounded
                            width="70"
                            height="70"
                            src={`../../icons/C_logo.png`}
                            alt="C"
                        />
                    </div>
                    <div className="column">
                        <Image 
                            rounded
                            width="85"
                            height="85"
                            src={`../../icons/React-logo.svg`}
                            alt="React"
                        />
                    </div>
                    <div className="column">
                        <Image 
                            rounded
                            width="70"
                            height="70"
                            src={`../../icons/Gatsby_logo.svg`}
                            alt="Gatsby"
                        />
                    </div>
                    <div className="column">
                        <Image 
                            rounded
                            width="70"
                            height="70"
                            src={`../../icons/docker_logo.png`}
                            alt="Docker"
                        />
                    </div>
                </div>
            </Container>
    }
    else {
        component =
            <Container className="text-center pt-5 mt-5" fluid>
                <h2>Skills</h2>
                <div className="d-md-inline-flex">
                    <div className="d-md-inline-flex">
                        <div className="mobile-column-4">
                            <Image
                                rounded
                                width="70"
                                height="70"
                                src={`../../icons/Python-logo.svg`}
                                alt="Python"
                            />
                        </div>
                        <div className="mobile-column-4">
                            <Image 
                                rounded
                                width="75"
                                height="75"
                                src={`../../icons/C_Sharp_logo.svg`}
                                alt="C Sharp"
                            />
                        </div>
                        <div className="mobile-column-4">
                            <Image 
                                rounded
                                width="70"
                                height="70"
                                src={`../../icons/cpp_logo.svg`}
                                alt="C plus plus"
                            />
                        </div>
                        <div className="mobile-column-4">
                            <Image 
                                rounded
                                width="70"
                                height="70"
                                src={`../../icons/C_logo.png`}
                                alt="C"
                            />
                        </div>
                    </div>
                    <div className="d-md-inline-flex">
                        <div className="mobile-column-3">
                            <Image 
                                rounded
                                width="85"
                                height="85"
                                src={`../../icons/React-logo.svg`}
                                alt="React"
                            />
                        </div>
                        <div className="mobile-column-3">
                            <Image 
                                rounded
                                width="70"
                                height="70"
                                src={`../../icons/Gatsby_logo.svg`}
                                alt="Gatsby"
                            />
                        </div>
                        <div className="mobile-column-3">
                            <Image 
                                rounded
                                width="70"
                                height="70"
                                src={`../../icons/docker_logo.png`}
                                alt="Docker"
                            />
                        </div>
                    </div>
                </div>
            </Container>
    }
    return (
        component
    )
}

export default Skills;