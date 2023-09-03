import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Classes from "./list.module.css";
import ListGroup from "react-bootstrap/ListGroup";
import { useRouter } from "next/router";
import { wordActions } from "../../store/word-Slice";
import RegularSpinner from "./UI/Spinner";

const WordsList = () => {
  const wordResult = useSelector((state) => state.word.result);
  const totalLibraryBooks = useSelector((state) => state.word.words);
  const textInForm = useSelector((state) => state.word.textLength);
  const [wordResults, setWordResults] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showCount, setShowCount] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (textInForm === 0) {
      setShowList(false);
      setWordResults(false);
      setShowCount(false);
    } else if (textInForm > 2) {
      setShowList(true);
      if (wordResult.length > 0) {
        setWordResults(false);
        setShowCount(true);
      } else {
        setWordResults(true);
        setShowCount(false);
      }
    }
  }, [textInForm, wordResult]);

  const bookEditHandler = (data) => {
    dispatch(wordActions.addEditData(data));
    router.push("/" + data.id + "/edit");
  };

  return (
    <>
      {!showList && (
        <div className={Classes.bookTotal}>
          <h6>
            {" "}
            مجموع كتب المكتبة <span>{totalLibraryBooks.length} </span>
            كتاب
          </h6>
        </div>
      )}
      {!showList && textInForm > 2 && <RegularSpinner />}

      {showList && (
        <Accordion className={Classes.list}>
          {wordResult.map((data) => (
            <Accordion.Item
              className={Classes.accordionItem}
              eventKey={data.id}
              key={data.id}
            >
              <Accordion.Header className={Classes.header}>
                <h6>{data.bName}</h6>
              </Accordion.Header>
              <Accordion.Body>
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <Row>
                        <Col lg={6} xs={8}>
                          <Card.Text>{data.bWriter}</Card.Text>
                        </Col>
                        <Col lg={6} xs={4}>
                          <Card.Text>: للمؤلف</Card.Text>
                        </Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col>
                          <Card.Text>{data.Parts}</Card.Text>
                        </Col>
                        <Col>
                          <Card.Text>: عدد المجلدات</Card.Text>
                        </Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col>
                          <Card.Text>{data.PrintNum}</Card.Text>{" "}
                        </Col>
                        <Col>
                          <Card.Text>: رقم الطبعة</Card.Text>{" "}
                        </Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col>
                          <Card.Text>{data.PrintYear}</Card.Text>
                        </Col>
                        <Col>
                          <Card.Text>: تاريخ الطبعة</Card.Text>
                        </Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col lg={6} xs={8}>
                          <Card.Text>{data.Publisher}</Card.Text>
                        </Col>
                        <Col lg={6} xs={4}>
                          <Card.Text>: دار النشر</Card.Text>
                        </Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col>
                          <Card.Text>{data.About}</Card.Text>
                        </Col>
                        <Col>
                          <Card.Text>: الموضوع</Card.Text>
                        </Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col>
                          <Card.Text>{data.Cover}</Card.Text>
                        </Col>
                        <Col>
                          <Card.Text>: نوع الغلاف</Card.Text>
                        </Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col>
                          <Card.Text>{data.Library}</Card.Text>
                        </Col>
                        <Col>
                          <Card.Text>: رقم المكتبة</Card.Text>
                        </Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col>
                          <Card.Text>{data.Shelf}</Card.Text>
                        </Col>
                        <Col>
                          <Card.Text>: رقم الرف</Card.Text>
                        </Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Row>
                        <Col>
                          <Card.Text>{data.bNum}</Card.Text>
                        </Col>
                        <Col>
                          <Card.Text>: رقم الكتاب</Card.Text>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col lg={8} xs={8}>
                          <Card.Text>{data.Notes}</Card.Text>
                        </Col>
                        <Col lg={4} xs={4}>
                          <Card.Text>: ملاحظات </Card.Text>
                        </Col>
                      </Row>
                    </ListGroup.Item>

                    <Button
                      className={Classes.button}
                      onClick={() => bookEditHandler(data)}
                    >
                      تعديل الكتاب
                    </Button>
                  </ListGroup>
                </Card.Body>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      )}
      {showCount && (
        <h5
          style={{
            backgroundColor: "#3385cc",
            borderRadius: "0px 0px 5px 5px",
            padding: "9px",
            marginTop: -5,
            position: "relative",
            color: "white",
            textAlign: "center",
            height: 53,
          }}
        >
          تم العثور على{" "}
          <span style={{ fontSize: 25 }}>{wordResult.length}</span> كتاب
        </h5>
      )}
      {wordResults && (
        <div
          style={{
            backgroundColor: "rgb(86 152 159)",
            borderRadius: "5px",
            padding: "1px",
          }}
        >
          <h5 style={{ color: "white", marginTop: "5px", textAlign: "center" }}>
            الكتاب غير موجود
          </h5>
        </div>
      )}
    </>
  );
};

export default WordsList;
