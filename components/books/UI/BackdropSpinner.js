import Spinner from "react-bootstrap/Spinner";
import Classes from "./ConfirmModal.module.css";

function BackDropSpinner() {
  return (
    <div className={Classes.backdropspinner}>
      <div className={Classes.modalspinner}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </div>
  );
}

export default BackDropSpinner;