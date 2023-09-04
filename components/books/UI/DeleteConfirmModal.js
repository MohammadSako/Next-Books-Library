import { Button } from "react-bootstrap";
import Classes from "./ConfirmModal.module.css";
import Alert from "react-bootstrap/Alert";
import { useDispatch } from "react-redux";
import { wordActions } from "../../../store/word-Slice";

const DeleteConfirmModal = (props) => {
  const dispatch = useDispatch();

  const cancelHandler = () => {
    dispatch(wordActions.deleteConfirmClose(false));
  };

  const deleteHandler = () => {
    dispatch(wordActions.deleteConfirmClose(false));
    props.onDeleteBook();
  };

  return (
    <div className={Classes.backdrop} onClick={cancelHandler}>
      <div className={Classes.modal}>
        {["danger"].map((variant) => (
          <Alert key={variant} variant={variant}>
            هل توافق على حذف الكتاب ؟
          </Alert>
        ))}
        <div className="d-grid gap-2">
          <Button variant="primary" onClick={cancelHandler}>
            لا أوافق على حذف الكتاب
          </Button>
          <Button variant="danger" onClick={deleteHandler}>
          أوافق على حذف الكتاب
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
