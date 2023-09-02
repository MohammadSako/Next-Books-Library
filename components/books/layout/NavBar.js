import React from "react";
import Link from "next/link";
import classes from "./index.module.css";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import shawkat from "../../../public/shawkat-white.png";

export function NavBar() {
  return (
    <>
      <Row className="justify-content-center">
        <Image
          alt="shawkat"
          src={shawkat}
          sizes="100vw"
          priority
          style={{
            width: "60%",
            height: "auto",
            marginTop: "20px"
          }}
        />
      </Row>
      <Row xs="auto" className="justify-content-center mt-3 mb-3 ">
        <Col>
          <Link href="/adv-search" className={classes.link}>
             بحث متقدم 
          </Link>
        </Col>
        <Col>
          <Link href="/new-book" className={classes.link}>
            إضافة كتاب جديد
          </Link>
        </Col>
        <Col>
          <Link href="/" className={classes.link}>
            الصفحة الرئيسية
          </Link>
        </Col>
      </Row>
    </>
  );
}
