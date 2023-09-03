import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import List from "../../components/books/list";
import AdvancedSearchForm from "../../components/books/AdvancedSearch";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { wordActions } from "../../store/word-Slice";

const SearchPage = () => {
  const dispatch = useDispatch();
  dispatch(wordActions.spinnerHandle(false));
  
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

export default SearchPage;
