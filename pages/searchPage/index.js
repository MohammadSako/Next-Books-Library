import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchForm from "../../components/books/SearchForm";
import List from "../../components/books/list";

const SearchPage = () => {
  return (
    <>
      <Row className="justify-content-center">
        <Col lg={6}>
          <SearchForm />
        </Col>
      </Row>{" "}
      <Row>
        <Col>
          <List />
        </Col>
      </Row>
    </>
  );
};

export default SearchPage;
