import React from "react";
import { Container, Image } from "react-bootstrap";

const Skills = ({ windowWidth }) => {
  let component;
  if (windowWidth > 750) {
    component = (
      <Container className="text-center pt-5 mt-5" fluid>
        <h2>Skills</h2>
        <div className="d-md-inline-flex">
          <div className="column">
            <Image
              rounded
              width="70"
              height="70"
              src={`../../icons/TS_logo.png`}
              alt="Typescript"
            />
          </div>
          <div className="column">
            <Image
              rounded
              width="75"
              height="75"
              src={`../../icons/go_logo.png`}
              alt="Go"
            />
          </div>
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
              width="70"
              height="70"
              src={`../../icons/sst_logo.svg`}
              alt="SST"
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
              src={`../../icons/astrojs_logo.svg`}
              alt="Astro"
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
    );
  } else {
    component = (
      <Container className="text-center pt-5 mt-5" fluid>
        <h2>Skills</h2>
        <div className="d-md-inline-flex">
          <div className="d-md-inline-flex">
            <div className="mobile-column-4">
              <Image
                rounded
                width="70"
                height="70"
                src={`../../icons/TS_logo.png`}
                alt="Typescript"
              />
            </div>
            <div className="mobile-column-4">
              <Image
                rounded
                width="75"
                height="75"
                src={`../../icons/go_logo.png`}
                alt="Go"
              />
            </div>
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
                width="70"
                height="70"
                src={`../../icons/sst_logo.svg`}
                alt="SST"
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
                src={`../../icons/astrojs_logo.svg`}
                alt="Astro"
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
    );
  }
  return component;
};

export default Skills;
