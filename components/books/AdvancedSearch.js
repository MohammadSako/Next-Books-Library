"use client";
import { Container, Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { wordActions } from "../../store/word-Slice";
import Classes from "./SearchForm.module.css";
import { useDebounce } from "use-debounce";

const AdvancedSearchForm = () => {
  const dispatch = useDispatch();
  const [names, setNames] = useState("");
  const [writers, setWriters] = useState("");
  const [publishers, setPublishers] = useState("");
  const [notes, setNotes] = useState("");
  const [parts, setParts] = useState("");
  const [printYears, setPrintYears] = useState("");
  const [printNums, setPrintNums] = useState("");
  const [bookNums, setBookNums] = useState("");
  const [shelfNums, setShelfNums] = useState("");
  const [libraryNums, setLibraryNums] = useState("");

  const [name] = useDebounce(names, 1000);
  const [writer] = useDebounce(writers, 1000);
  const [publisher] = useDebounce(publishers, 1000);
  const [note] = useDebounce(notes, 1000);
  const [part] = useDebounce(parts, 1000);
  const [printYear] = useDebounce(printYears, 1000);
  const [printNum] = useDebounce(printNums, 1000);
  const [bookNum] = useDebounce(bookNums, 1000);
  const [shelfNum] = useDebounce(shelfNums, 1000);
  const [libraryNum] = useDebounce(libraryNums, 1000);

  useEffect(() => {
    dispatch(wordActions.wordsFilter(name));
  }, [dispatch, name]);
  useEffect(() => {
    dispatch(wordActions.writerFilter(writer));
  }, [dispatch, writer]);
  useEffect(() => {
    dispatch(wordActions.publisherFilter(publisher));
  }, [dispatch, publisher]);
  useEffect(() => {
    dispatch(wordActions.noteFilter(note));
  }, [dispatch, note]);
  useEffect(() => {
    dispatch(wordActions.partFilter(part));
  }, [dispatch, part]);
  useEffect(() => {
    dispatch(wordActions.printYearFilter(printYear));
  }, [dispatch, printYear]);
  useEffect(() => {
    dispatch(wordActions.printNumFilter(printNum));
  }, [dispatch, printNum]);
  useEffect(() => {
    dispatch(wordActions.bookNumFilter(bookNum));
  }, [dispatch, bookNum]);
  useEffect(() => {
    dispatch(wordActions.shelfNumFilter(shelfNum));
  }, [dispatch, shelfNum]);
  useEffect(() => {
    dispatch(wordActions.libraryNumFilter(libraryNum));
  }, [dispatch, libraryNum]);

  return (
    <Container>
      <Row className={Classes.row}>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ display: "flex", justifyContent: "center" }}>
                <h4>بحث متقدم</h4>
              </Form.Label>
              <Row>
                <Col sm>
                  <Form.Label>اسم الكتاب</Form.Label>
                  <Form.Control
                    className={Classes.formSearch}
                    dir="rtl"
                    type="text"
                    placeholder="أدخل اسم الكتاب (ادخل ثلاثة أحرف على الأقل)"
                    onChange={(e) => setNames(e.target.value)}
                  />
                </Col>
                <Col sm>
                  <Form.Label>اسم المؤلف</Form.Label>

                  <Form.Control
                    className={Classes.formSearch}
                    dir="rtl"
                    type="text"
                    placeholder="أدخل اسم المؤلف (ادخل ثلاثة أحرف على الأقل)"
                    onChange={(e) => setWriters(e.target.value)}
                  />
                </Col>
                <Col sm>
                  <Form.Label>اسم دار النشر</Form.Label>

                  <Form.Control
                    className={Classes.formSearch}
                    dir="rtl"
                    type="text"
                    placeholder="أدخل اسم دار النشر (ادخل ثلاثة أحرف على الأقل)"
                    onChange={(e) => setPublishers(e.target.value)}
                  />
                </Col>
                <Col sm>
                  <Form.Label>ملاحظات عن الكتاب</Form.Label>

                  <Form.Control
                    className={Classes.formSearch}
                    dir="rtl"
                    type="text"
                    placeholder="أدخل شيئا من الملاحظات (ادخل ثلاثة أحرف على الأقل)"
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </Col>
              </Row>

              <Row>
                <Col sm>
                  <Form.Label>عدد المجلدات</Form.Label>
                  <Form.Control
                    className={Classes.formSearch}
                    dir="rtl"
                    type="number"
                    placeholder="أدخل عدد مجلدات الكتاب"
                    onChange={(e) => setParts(e.target.value)}
                  />
                </Col>
                <Col sm>
                  <Form.Label>رقم الطبعة</Form.Label>
                  <Form.Control
                    className={Classes.formSearch}
                    dir="rtl"
                    type="number"
                    placeholder="أدخل رقم الطبعة"
                    onChange={(e) => setPrintNums(e.target.value)}
                  />
                </Col>
                <Col sm>
                  <Form.Label>تاريخ الطبعة</Form.Label>

                  <Form.Control
                    className={Classes.formSearch}
                    dir="rtl"
                    type="number"
                    placeholder="أدخل تاريخ الطعبة"
                    onChange={(e) => setPrintYears(e.target.value)}
                  />
                </Col>
                <Col sm>
                  <Form.Label>رقم الكتاب</Form.Label>
                  <Form.Control
                    className={Classes.formSearch}
                    dir="rtl"
                    type="number"
                    placeholder="أدخل رقم الكتاب"
                    onChange={(e) => setBookNums(e.target.value)}
                  />
                </Col>
                <Col sm>
                  <Form.Label>رقم الرف</Form.Label>
                  <Form.Control
                    className={Classes.formSearch}
                    dir="rtl"
                    type="number"
                    placeholder="أدخل رقم الرف"
                    onChange={(e) => setShelfNums(e.target.value)}
                  />
                </Col>
                <Col sm>
                  <Form.Label>رقم المكتبة</Form.Label>
                  <Form.Control
                    className={Classes.formSearch}
                    dir="rtl"
                    type="number"
                    placeholder="أدخل رقم المكتبة"
                    onChange={(e) => setLibraryNums(e.target.value)}
                  />
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AdvancedSearchForm;
