"use client";
import { Container, Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { wordActions } from "../../store/word-Slice";
import Classes from "./SearchForm.module.css";
import { useDebounce } from "use-debounce";

const SearchForm = () => {
  const dispatch = useDispatch();
  const [datas, setDatas] = useState("");
  const [data] = useDebounce(datas, 1000);

  useEffect(() => {
    dispatch(wordActions.wordsFilter(data));
  }, [dispatch, data]);

  return (
    <Container>
      <Row className={Classes.row}>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ display: "flex", justifyContent: "center" }}>
                <h4>ابحث في المكتبة</h4>
              </Form.Label>
              <Form.Control
                className={Classes.formSearch}
                dir="rtl"
                type="text"
                placeholder="أدخل اسم الكتاب (ادخل ثلاثة أحرف على الأقل)"
                onChange={(e) => setDatas(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchForm;
