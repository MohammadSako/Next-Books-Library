import Link from "next/link";
import React from "react";
import Classes from "./index.module.css";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <div className={Classes.footer}>
        <Row>
          <Col lg={6} xs={12}>
            <span class="mb-3 mb-md-0 text-muted">
              © 2023 <i>By</i> Mohammad Sako
            </span>
          </Col>
          <Col lg={6} xs={12}>
            <Link
              style={{ textDecoration: "none", color: "#b39393" }}
              href="https://www.linkedin.com/in/mohammad-murad-850b9970/"
              target="_blank"
            >
              <span>mohammad.talal.murad@gmail.com</span>
            </Link>
          </Col>
        </Row>
      </div>
    </footer>
  );
};
export default React.memo(Footer);
