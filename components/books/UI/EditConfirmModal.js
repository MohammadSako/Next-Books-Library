import { Button } from "react-bootstrap";
import Classes from "./ConfirmModal.module.css";
import Alert from "react-bootstrap/Alert";
import { useDispatch } from "react-redux";
import { wordActions } from "../../../store/word-Slice";

const EditConfirmModal = (props) => {
  const dispatch = useDispatch();

  const cancelHandler = () => {
    dispatch(wordActions.editConfirmClose(false));
  };

  const editHandler = () => {
    dispatch(wordActions.editConfirmClose(false));
    props.editBook();
  };

  return (
    <div className={Classes.backdrop} onClick={cancelHandler}>
      <div className={Classes.modal}>
        {["danger"].map((variant) => (
          <Alert key={variant} variant={variant}>
            هل توافق على تعديل بيانات الكتاب ؟
          </Alert>
        ))}
        <div className="d-grid gap-2">
          <Button variant="primary" onClick={cancelHandler}>
            لا أوافق على التعديلات
          </Button>

          <Button variant="danger" onClick={editHandler}>
            أوافق على التعديلات
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditConfirmModal;
