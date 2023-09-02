import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import List from "../../components/books/list";
import AdvancedSearchForm from "../../components/books/AdvancedSearch";

const SearchPage = () => {
  return (
    <>
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
