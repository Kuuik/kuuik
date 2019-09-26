import React from "react";
import { Col, Container, Row } from "reactstrap";
import Main from "./main";


const LandingLayout = ({ children }) => (
  <React.Fragment>
    <Main className="d-flex w-100 main-kuuik">
      <Container className="d-flex flex-column">
        <Row className="h-100">
          <Col sm="10" md="8" lg="8" className="mx-auto d-table h-100">
            <div className="d-table-cell position-children">

            </div>
          </Col>
        </Row>
      </Container>
    </Main>
  </React.Fragment>
);

export default LandingLayout;
