import React, { useEffect, useRef } from "react";
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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { wordActions } from "../../store/word-Slice";
import useIsChange from "./layout/use-isChange";
import DeleteConfirmModal from "./UI/DeleteConfirmModal";
import EditConfirmModal from "./UI/EditConfirmModal";

const EditBookForm = (props) => {
  const [editConfirm, setEditConfirm] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const dispatch = useDispatch();
  const editBackDrop = useSelector((state) => state.word.editBackDrop);
  const deleteBackDrop = useSelector((state) => state.word.deleteBackDrop);
  const {
    bWriter,
    bNum,
    Cover,
    Library,
    Notes,
    Parts,
    PrintNum,
    PrintYear,
    Publisher,
    Shelf,
    bName,
    About,
  } = props;

  //delete alert (open close) handler
  useEffect(() => {
    setEditConfirm(editBackDrop);
    setDeleteConfirm(deleteBackDrop);
  }, [deleteBackDrop, editBackDrop]);

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
    isValid: enteredTitleIsValid,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitleInput,
  } = useIsChange((value) => value.trim() !== "");
  //writer
  const {
    // value: enteredWriter,
    isValid: enteredWriterIsValid,
    valueChangeHandler: writerChangeHandler,
    inputBlurHandler: writerBlurHandler,
    reset: resetWriterInput,
  } = useInput((value) => value.trim() !== "");
  //parts
  const {
    isValid: enteredPartsIsValid,
    valueChangeHandler: partsChangeHandler,
    inputBlurHandler: partsBlurHandler,
    reset: resetPartsInput,
  } = useInput((value) => value.trim() !== "");
  //about
  const {
    isValid: enteredAboutIsValid,
    valueChangeHandler: aboutChangeHandler,
    inputBlurHandler: aboutBlurHandler,
    reset: resetAboutInput,
  } = useInput((value) => value.trim() !== "");
  //printNum
  const {
    isValid: enteredPrintNumIsValid,
    valueChangeHandler: printNumChangeHandler,
    inputBlurHandler: printNumBlurHandler,
    reset: resetPrintNumInput,
  } = useInput((value) => value.trim() !== "");
  //printYear
  const {
    isValid: enteredPrintYearIsValid,
    valueChangeHandler: printYearChangeHandler,
    inputBlurHandler: printYearBlurHandler,
    reset: resetPrintYearInput,
  } = useInput((value) => value.trim() !== "");
  //publisher
  const {
    isValid: enteredPublisherIsValid,
    valueChangeHandler: publisherChangeHandler,
    inputBlurHandler: publisherBlurHandler,
    reset: resetPublisherInput,
  } = useInput((value) => value.trim() !== "");
  //cover
  const {
    isValid: enteredCoverIsValid,
    valueChangeHandler: coverChangeHandler,
    inputBlurHandler: coverBlurHandler,
    reset: resetCoverInput,
  } = useInput((value) => value.trim() !== "");
  //library
  const {
    isValid: enteredLibraryIsValid,
    valueChangeHandler: libraryChangeHandler,
    inputBlurHandler: libraryBlurHandler,
    reset: resetLibraryInput,
  } = useInput((value) => value.trim() !== "");
  //shelf
  const {
    isValid: enteredShelfIsValid,
    valueChangeHandler: shelfChangeHandler,
    inputBlurHandler: shelfBlurHandler,
    reset: resetShelfInput,
  } = useInput((value) => value.trim() !== "");
  //bNum
  const {
    isValid: enteredBNumIsValid,
    valueChangeHandler: bNumChangeHandler,
    inputBlurHandler: bNumBlurHandler,
    reset: resetBNumInput,
  } = useInput((value) => value.trim() !== "");
  //bNum
  const {
    isValid: enteredNotesIsValid,
    valueChangeHandler: notesChangeHandler,
    inputBlurHandler: notesBlurHandler,
    reset: resetNotesInput,
  } = useInput((value) => value.trim() !== "");

  //Submit
  const submitHandler = () => {
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
      id: props.id,
    };
    props.onEditBook(bookData);
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

  const bookEditHandler = () => {
    dispatch(wordActions.editConfirmClose(true));
  };
  const bookDeleteHandler = () => {
    dispatch(wordActions.deleteConfirmClose(true));
  };

  const deleteTheBook = () => {
    props.onDeleteBook(props);
  };

  return (
    <Container>
      {deleteConfirm && <DeleteConfirmModal onDeleteBook={deleteTheBook} />}
      {editConfirm && <EditConfirmModal editBook={submitHandler} />}
      <Card>
        <h4 className="mt-3">تعديل بيانات الكتاب</h4>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            <Row>
              <Col lg={6}>
                <Form.Group as={Col} controlId="formGridWriter">
                  <Form.Label>اسم المؤلف</Form.Label>
                  <Form.Control
                    dir="rtl"
                    type="text"
                    ref={writerInputRef}
                    onChange={writerChangeHandler}
                    onBlur={writerBlurHandler}
                    defaultValue={bWriter}
                    // value={enteredWriter}
                  />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group as={Col} controlId="formGridTitle">
                  <Form.Label>اسم الكتاب</Form.Label>
                  <Form.Control
                    dir="rtl"
                    type="text"
                    ref={titleInputRef}
                    onChange={titleChangeHandler}
                    onBlur={titleBlurHandler}
                    // value={enteredTitle}
                    defaultValue={bName}
                  />
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
                    ref={aboutInputRef}
                    onChange={aboutChangeHandler}
                    onBlur={aboutBlurHandler}
                    defaultValue={About}
                  />
                </Form.Group>
              </Col>
              <Col lg={3} sm={6}>
                <Form.Group as={Col} controlId="formGridPublisher">
                  <Form.Label>دار النشر</Form.Label>
                  <Form.Control
                    dir="rtl"
                    type="text"
                    ref={publisherInputRef}
                    onChange={publisherChangeHandler}
                    onBlur={publisherBlurHandler}
                    defaultValue={Publisher}
                  />
                </Form.Group>
              </Col>
              <Col lg={3} sm={6}>
                <Form.Group as={Col} controlId="formGridPrintYear">
                  <Form.Label>تاريخ الطبعة</Form.Label>
                  <Form.Control
                    dir="rtl"
                    type="number"
                    ref={printYearInputRef}
                    onChange={printYearChangeHandler}
                    onBlur={printYearBlurHandler}
                    defaultValue={PrintYear}
                  />
                </Form.Group>
              </Col>
              <Col lg={3} sm={6}>
                <Form.Group as={Col} controlId="formGridParts">
                  <Form.Label>عدد المجلدات</Form.Label>
                  <Form.Control
                    dir="rtl"
                    type="number"
                    ref={partsInputRef}
                    onChange={partsChangeHandler}
                    onBlur={partsBlurHandler}
                    defaultValue={Parts}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col lg={3} sm={6}>
                <Form.Group as={Col} controlId="formGridPrintNum">
                  <Form.Label>رقم الطبعة</Form.Label>
                  <Form.Control
                    dir="rtl"
                    type="number"
                    ref={printNumInputRef}
                    onChange={printNumChangeHandler}
                    onBlur={printNumBlurHandler}
                    defaultValue={PrintNum}
                  />
                </Form.Group>
              </Col>
              <Col lg={2} sm={6}>
                <Form.Group as={Col} controlId="formGridParts">
                  <Form.Label>نوع الغلاف</Form.Label>
                  <Form.Control
                    dir="rtl"
                    type="text"
                    ref={coverInputRef}
                    onChange={coverChangeHandler}
                    onBlur={coverBlurHandler}
                    defaultValue={Cover}
                  />
                </Form.Group>
              </Col>
              <Col lg={2} sm={6}>
                <Form.Group as={Col} controlId="formGridLibrary">
                  <Form.Label>رقم المكتبة</Form.Label>
                  <Form.Control
                    dir="rtl"
                    type="number"
                    ref={libraryInputRef}
                    onChange={libraryChangeHandler}
                    onBlur={libraryBlurHandler}
                    defaultValue={Library}
                  />
                </Form.Group>
              </Col>
              <Col lg={2} sm={6}>
                <Form.Group as={Col} controlId="formGridshelf">
                  <Form.Label>رقم الرف</Form.Label>
                  <Form.Control
                    dir="rtl"
                    type="number"
                    ref={shelfInputRef}
                    onChange={shelfChangeHandler}
                    onBlur={shelfBlurHandler}
                    defaultValue={Shelf}
                  />
                </Form.Group>
              </Col>
              <Col lg={3} sm={6}>
                <Form.Group as={Col} controlId="formGridBNum">
                  <Form.Label>رقم الكتاب</Form.Label>
                  <Form.Control
                    dir="rtl"
                    type="number"
                    ref={bNumInputRef}
                    onChange={bNumChangeHandler}
                    onBlur={bNumBlurHandler}
                    defaultValue={bNum}
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
                    ref={notesInputRef}
                    onChange={notesChangeHandler}
                    onBlur={notesBlurHandler}
                    defaultValue={Notes}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Stack direction="horizontal">
                <div className="p-2">
                  <Col>
                    <Button onClick={bookDeleteHandler} variant="danger">
                      حذف
                    </Button>
                  </Col>
                </div>
                <div className="p-2">
                  <Col>
                    <Button onClick={bookEditHandler} variant="primary">
                      تعديل
                    </Button>
                  </Col>
                </div>

                <div className="p-2">
                  {" "}
                  <Col>
                    <Link href="/">
                      <Button variant="secondary">إلغاء العملية</Button>
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
