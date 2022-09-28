import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="Responsive Website" icon="ri-apps-line" />

                <ServicesItem title="Web Development" icon="ri-computer-line" />
              </div>

              <ServicesItem
                title="Full-Stack Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="My Tech Stack" />
            <p>
              The following stack I use, I have skills both on the frontend or
              backend but I prefer and are interested in the frontend.
            </p>
            <h5 className="mb-0 mt-1">FrontEnd</h5>
            <div className="d-flex mt-1">
              <button
                className="btn mx-1"
                style={{ background: "#171f38", color: "#01d293" }}
              >
                ReactJs
              </button>
              <button
                className="btn  mx-1"
                style={{ background: "#171f38", color: "#01d293" }}
              >
                NextJs
              </button>
              <button
                className="btn  mx-1"
                style={{ background: "#171f38", color: "#01d293" }}
              >
                Bootstrap
              </button>
            </div>
            <h5 className="mb-0 mt-2">BackEnd</h5>
            <div className="d-flex mt-1">
              <button
                className="btn mx-1"
                style={{ background: "#171f38", color: "#01d293" }}
              >
                NodeJs
              </button>
              <button
                className="btn mx-1"
                style={{ background: "#171f38", color: "#01d293" }}
              >
                Express
              </button>
              <button
                className="btn mx-1"
                style={{ background: "#171f38", color: "#01d293" }}
              >
                Multer
              </button>
            </div>
            <h5 className="mb-0 mt-2">Database</h5>
            <div className="d-flex mt-1">
              <button
                className="btn mx-1"
                style={{ background: "#171f38", color: "#01d293" }}
              >
                Mysql
              </button>
              <button
                className="btn mx-1"
                style={{ background: "#171f38", color: "#01d293" }}
              >
                MongoDB
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
