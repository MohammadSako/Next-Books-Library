import React, { useRef } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Stack,
} from "react-bootstrap";
import useInput from "./layout/use-input";
import Link from "next/link";

const EditBookForm = (props) => {
  const titleInputRef = useRef();
  const writerInputRef = useRef();
  const partsInputRef = useRef();
  const aboutInputRef = useRef();
  const printNumInputRef = useRef();
  const printYearInputRef = useRef();
  const publisherInputRef = useRef();
  const coverInputRef = useRef();
  const libraryInputRef = useRef();
  const shelfInputRef = useRef();
  const bNumInputRef = useRef();
  const notesInputRef = useRef();

  //title
  const {
    value: enteredTitle,
    isValid: enteredTitleIsValid,
    hasError: titleInputHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitleInput,
  } = useInput((value) => value.trim() !== "");
  //writer
  const {
    value: enteredWriter,
    isValid: enteredWriterIsValid,
    hasError: writerInputHasError,
    valueChangeHandler: writerChangeHandler,
    inputBlurHandler: writerBlurHandler,
    reset: resetWriterInput,
  } = useInput((value) => value.trim() !== "");
  //parts
  const {
    value: enteredParts,
    isValid: enteredPartsIsValid,
    hasError: partsInputHasError,
    valueChangeHandler: partsChangeHandler,
    inputBlurHandler: partsBlurHandler,
    reset: resetPartsInput,
  } = useInput((value) => value.trim() !== "");
  //about
  const {
    value: enteredAbout,
    isValid: enteredAboutIsValid,
    hasError: aboutInputHasError,
    valueChangeHandler: aboutChangeHandler,
    inputBlurHandler: aboutBlurHandler,
    reset: resetAboutInput,
  } = useInput((value) => value.trim() !== "");
  //printNum
  const {
    value: enteredPrintNum,
    isValid: enteredPrintNumIsValid,
    hasError: printNumInputHasError,
    valueChangeHandler: printNumChangeHandler,
    inputBlurHandler: printNumBlurHandler,
    reset: resetPrintNumInput,
  } = useInput((value) => value.trim() !== "");
  //printYear
  const {
    value: enteredPrintYear,
    isValid: enteredPrintYearIsValid,
    hasError: printYearInputHasError,
    valueChangeHandler: printYearChangeHandler,
    inputBlurHandler: printYearBlurHandler,
    reset: resetPrintYearInput,
  } = useInput((value) => value.trim() !== "");
  //publisher
  const {
    value: enteredPublisher,
    isValid: enteredPublisherIsValid,
    hasError: publisherInputHasError,
    valueChangeHandler: publisherChangeHandler,
    inputBlurHandler: publisherBlurHandler,
    reset: resetPublisherInput,
  } = useInput((value) => value.trim() !== "");
  //cover
  const {
    value: enteredCover,
    isValid: enteredCoverIsValid,
    hasError: coverInputHasError,
    valueChangeHandler: coverChangeHandler,
    inputBlurHandler: coverBlurHandler,
    reset: resetCoverInput,
  } = useInput((value) => value.trim() !== "");
  //library
  const {
    value: enteredLibrary,
    isValid: enteredLibraryIsValid,
    hasError: libraryInputHasError,
    valueChangeHandler: libraryChangeHandler,
    inputBlurHandler: libraryBlurHandler,
    reset: resetLibraryInput,
  } = useInput((value) => value.trim() !== "");
  //shelf
  const {
    value: enteredShelf,
    isValid: enteredShelfIsValid,
    hasError: shelfInputHasError,
    valueChangeHandler: shelfChangeHandler,
    inputBlurHandler: shelfBlurHandler,
    reset: resetShelfInput,
  } = useInput((value) => value.trim() !== "");
  //bNum
  const {
    value: enteredBNum,
    isValid: enteredBNumIsValid,
    hasError: bNumInputHasError,
    valueChangeHandler: bNumChangeHandler,
    inputBlurHandler: bNumBlurHandler,
    reset: resetBNumInput,
  } = useInput((value) => value.trim() !== "");
  //bNum
  const {
    value: enteredNotes,
    hasError: notesInputHasError,
    valueChangeHandler: notesChangeHandler,
    inputBlurHandler: notesBlurHandler,
    reset: resetNotesInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;
  if (
    enteredTitleIsValid &&
    enteredWriterIsValid
  ) {
    if (
      enteredTitle.length > 2 &&
      enteredWriter.length > 2 &&
      enteredPublisher.length > 2
    ) {
      formIsValid = true;
    }
  }

  // if (
  //   enteredTitleIsValid &&
  //   enteredWriterIsValid &&
  //   enteredPartsIsValid &&
  //   enteredAboutIsValid &&
  //   enteredPrintNumIsValid &&
  //   enteredPrintYearIsValid &&
  //   enteredPublisherIsValid &&
  //   enteredCoverIsValid &&
  //   enteredLibraryIsValid &&
  //   enteredShelfIsValid &&
  //   enteredBNumIsValid
  // ) {
  //   formIsValid = true;
  // }

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      !enteredTitleIsValid &&
      !enteredWriterIsValid &&
      !enteredPartsIsValid &&
      !enteredAboutIsValid &&
      !enteredPrintNumIsValid &&
      !enteredPrintYearIsValid &&
      !enteredPublisherIsValid &&
      !enteredCoverIsValid &&
      !enteredLibraryIsValid &&
      !enteredShelfIsValid &&
      !enteredBNumIsValid
    ) {
      return;
    }

    const enteredTitle = titleInputRef.current.value;
    const enteredWriter = writerInputRef.current.value;
    const enteredParts = partsInputRef.current.value;
    const enteredAbout = aboutInputRef.current.value;
    const enteredPrintNum = printNumInputRef.current.value;
    const enteredPrintYear = printYearInputRef.current.value;
    const enteredPublisher = publisherInputRef.current.value;
    const enteredCover = coverInputRef.current.value;
    const enteredLibrary = libraryInputRef.current.value;
    const enteredShelf = shelfInputRef.current.value;
    const enteredBNum = bNumInputRef.current.value;
    const enteredNotes = notesInputRef.current.value;

    const bookData = {
      bName: enteredTitle,
      bWriter: enteredWriter,
      Parts: enteredParts,
      PrintNum: enteredPrintNum,
      PrintYear: enteredPrintYear,
      Publisher: enteredPublisher,
      About: enteredAbout,
      Cover: enteredCover,
      Library: enteredLibrary,
      Shelf: enteredShelf,
      bNum: enteredBNum,
      Notes: enteredNotes,
    };
    props.onAddBook(bookData);

    resetTitleInput;
    resetWriterInput;
    resetPartsInput;
    resetAboutInput;
    resetPrintNumInput;
    resetPrintYearInput;
    resetPublisherInput;
    resetCoverInput;
    resetLibraryInput;
    resetShelfInput;
    resetBNumInput;
    resetNotesInput;
  };

  console.log(enteredTitle.length > 2);
  console.log(enteredTitleIsValid);

  return (
    <Container>
      <Card>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            <Row>
              <Col lg={6}>
                <Form.Group as={Col} controlId="formGridWriter">
                  <Form.Label><span style={{color:"red"}}>*</span>اسم المؤلف</Form.Label>
                  <Form.Control
                    dir="rtl"
                    type="text"
                    placeholder="الرجاء كتابة ثلاثة أحرف على الأقل"
                    ref={writerInputRef}
                    onChange={writerChangeHandler}
                    onBlur={writerBlurHandler}
                    value={enteredWriter}
                  />
                  {writerInputHasError && (
                    <p
                      className="error-text"
                      style={{
                        backgroundColor: "rgb(255 0 0)",
                        borderRadius: "5px",
                        padding: "1px",
                        color: "white",
                      }}
                    >
                      ! الرجاء كتابة ثلاثة أحرف على الأقل
                    </p>
                  )}
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group as={Col} controlId="formGridTitle">
                  <Form.Label><span style={{color:"red"}}>*</span>اسم الكتاب</Form.Label>
                  <Form.Control
                    dir="rtl"
                    type="text"
                    placeholder="الرجاء كتابة ثلاثة أحرف على الأقل"
                    ref={titleInputRef}
                    onChange={titleChangeHandler}
                    onBlur={titleBlurHandler}
                    value={enteredTitle}
                  />
                  {titleInputHasError && (
                    <p
                      className="error-text"
                      style={{
                        backgroundColor: "rgb(255 0 0)",
                        borderRadius: "5px",
                        padding: "1px",
                        color: "white",
                      }}
                    >
                      ! الرجاء كتابة ثلاثة أحرف على الأقل
                    </p>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col lg={3} sm={6}>
                <Form.Group as={Col} controlId="formGridAbout">
                  <Form.Label>موضوع الكتاب</Form.Label>
                  <Form.Control
                    dir="rtl"
                    type="text"
                    placeholder="اكتب موضوع الكتاب"
                    ref={aboutInputRef}
                    onChange={aboutChangeHandler}
                    onBlur={aboutBlurHandler}
                    value={enteredAbout}
                  />
 
                </Form.Group>
              </Col>
              <Col lg={3} sm={6}>
                <Form.Group as={Col} controlId="formGridPublisher">
                  <Form.Label>دار النشر</Form.Label>
                  <Form.Control
                    dir="rtl"
                    type="text"
                    placeholder="الرجاء كتابة ثلاثة أحرف على الأقل"
                    ref={publisherInputRef}
                    onChange={publisherChangeHandler}
                    onBlur={publisherBlurHandler}
                    value={enteredPublisher}
                  />
                 
                </Form.Group>
              </Col>
              <Col lg={3} sm={6}>
                <Form.Group as={Col} controlId="formGridPrintYear">
                  <Form.Label>تاريخ الطبعة</Form.Label>
                  <Form.Control
                    dir="rtl"
                    type="number"
                    placeholder="ادخل تاريخ طباعة الكتاب"
                    ref={printYearInputRef}
                    onChange={printYearChangeHandler}
                    onBlur={printYearBlurHandler}
                    value={enteredPrintYear}
                  />
                  
                </Form.Group>
              </Col>
              <Col lg={3} sm={6}>
                <Form.Group as={Col} controlId="formGridParts">
                  <Form.Label>عدد المجلدات</Form.Label>
                  <Form.Control
                    dir="rtl"
                    type="number"
                    placeholder="ادخل عدد مجلدات الكتاب"
                    ref={partsInputRef}
                    onChange={partsChangeHandler}
                    onBlur={partsBlurHandler}
                    value={enteredParts}
                  />
                 
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col lg={3} sm={6}>
                <Form.Group as={Col} controlId="formGridCover">
                  <Form.Label>نوع الغلاف</Form.Label>
                  <Form.Control
                    dir="rtl"
                    type="text"
                    placeholder="ادخل نوع غلاف الكتاب"
                    ref={coverInputRef}
                    onChange={coverChangeHandler}
                    onBlur={coverBlurHandler}
                    value={enteredCover}
                  />
                  
                </Form.Group>
              </Col>
              <Col lg={2} sm={6}>
                <Form.Group as={Col} controlId="formGridLibrary">
                  <Form.Label>رقم المكتبة</Form.Label>
                  <Form.Control
                    dir="rtl"
                    type="number"
                    placeholder="ادخل رقم المكتبة"
                    ref={libraryInputRef}
                    onChange={libraryChangeHandler}
                    onBlur={libraryBlurHandler}
                    value={enteredLibrary}
                  />
                 
                </Form.Group>
              </Col>
              <Col lg={2} sm={6}>
                <Form.Group as={Col} controlId="formGridshelf">
                  <Form.Label>رقم الرف</Form.Label>
                  <Form.Control
                    dir="rtl"
                    type="number"
                    placeholder="ادخل رقم رف الكتاب"
                    ref={shelfInputRef}
                    onChange={shelfChangeHandler}
                    onBlur={shelfBlurHandler}
                    value={enteredShelf}
                  />
                  
                </Form.Group>
              </Col>
              <Col lg={2} sm={6}>
                <Form.Group as={Col} controlId="formGridBNum">
                  <Form.Label>رقم الكتاب</Form.Label>
                  <Form.Control
                    dir="rtl"
                    type="number"
                    placeholder="ادخل رقم الكتاب"
                    ref={bNumInputRef}
                    onChange={bNumChangeHandler}
                    onBlur={bNumBlurHandler}
                    value={enteredBNum}
                  />
                  
                </Form.Group>
              </Col>
              <Col lg={3} sm={6}>
                <Form.Group as={Col} controlId="formGridPrintNum">
                  <Form.Label>رقم الطبعة</Form.Label>
                  <Form.Control
                    dir="rtl"
                    type="number"
                    placeholder="ادخل رقم الطبعة"
                    ref={printNumInputRef}
                    onChange={printNumChangeHandler}
                    onBlur={printNumBlurHandler}
                    value={enteredPrintNum}
                  />
          
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col style={{ margin: "10px 0 20px 0" }}>
                <Form.Group as={Col} controlId="formGridNotes">
                  <Form.Label>ملاحظات</Form.Label>
                  <Form.Control
                    as="textarea"
                    dir="rtl"
                    type="text"
                    placeholder="ادخل ملاحظاتك حول الكتاب"
                    ref={notesInputRef}
                    onChange={notesChangeHandler}
                    onBlur={notesBlurHandler}
                    value={enteredNotes}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Stack direction="horizontal">
                <div className="p-2">
                  <Col>
                    <Button
                      disabled={!formIsValid}
                      variant="primary"
                      type="submit"
                    >
                      إضافة الكتاب
                    </Button>
                  </Col>
                </div>
                <div className="p-2">
                  <Col>
                    <Link href="/">
                      <Button variant="danger">إلغاء العملية</Button>
                    </Link>
                  </Col>
                </div>
              </Stack>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EditBookForm;
