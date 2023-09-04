import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import List from "../../components/books/list";
import AdvancedSearchForm from "../../components/books/AdvancedSearch";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { wordActions } from "../../store/word-Slice";
import { useEffect } from "react";
import { useRouter } from "next/router";

const AdvSearchPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.word.words);

  useEffect(() => {
    dispatch(wordActions.spinnerHandle(false));
  }, [dispatch]);

  useEffect(() => {
    if (Data.length === 0) {
      router.push("/");
    }
  }, [router, Data]);

  return (
    <>
      <Head>
        <title>بحث متقدم</title>
        <meta name="Shawkat Library" content="Shawkat Library" />
      </Head>
      <Row>
        <Col>
          <AdvancedSearchForm />
        </Col>
      </Row>
      <Row>
        <Col>
          <List />
        </Col>
      </Row>
    </>
  );
};

export default AdvSearchPage;
