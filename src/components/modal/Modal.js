import { X } from "react-feather";
import style from "../../assets/styles/modal/Modal.module.css";

function Modal({ title, children, show, close }) {
  if (show) {
    return (
      <div className={style.contModal}>
        <div className={style.modal}>
          <div className={style.headModal}>
            <h1 className={style.title}>{title}</h1>
            <button
              className={style.btnClose}
              onClick={() => {
                close();
              }}
            >
              <X />
            </button>
          </div>
          <div className={style.bodyModal}>{children}</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Modal;
