import axios from "axios";
import classNames from "classnames";
import { useState } from "react";
import { Delete, Edit2, MoreVertical, Trash2 } from "react-feather";
import style from "../../assets/styles/card/Music.module.css";
import FormEdit from "../form/FormEdit";
import Modal from "../modal/Modal";

const modalStates = { editSong: false, deleteSong: false };

function Music({ data, status }) {
  const [action, setAction] = useState(false);
  const [activeModals, setActiveModals] = useState(modalStates);

  const changeModalState = (modal) => async () => {
    setActiveModals({ ...activeModals, [modal]: !activeModals[modal] });
  };

  return (
    <div className={style.item}>
      <div className={classNames(style.imgMusic, style.center)}>
        <img
          className={style.imgSong}
          src="https://images.unsplash.com/photo-1519677584237-752f8853252e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        />
      </div>
      <div className={style.names}>
        <p className={style.song}>{data.nombre}</p>
        <p className={style.artist}>{data.autor}</p>
      </div>
      <div className={classNames(style.type, style.center)}>
        <div className={style.desc}>{data.genero}</div>
      </div>
      <div className={classNames(style.time, style.center)}>
        <p className={style.desc}>{data.duracion}</p>
      </div>
      <div className={classNames(style.actions, style.center)}>
        <button className={style.btnAction} onClick={() => setAction(!action)}>
          <MoreVertical size={18} />
        </button>
        <div
          className={
            action
              ? classNames(style.contOption, style.showOption)
              : style.contOption
          }
        >
          <MenuItem text="Editar" onClick={changeModalState("editSong")}>
            <Edit2 size={18} />
          </MenuItem>
          <MenuItem
            text="Eliminar"
            color="danger"
            onClick={changeModalState("deleteSong")}
          >
            <Delete size={18} />
          </MenuItem>
        </div>
      </div>
      <Modal
        title="Editar canción"
        show={activeModals.editSong}
        close={changeModalState("editSong")}
      >
        <div className={style.contForm}>
          <FormEdit
            data={data}
            status={status}
            close={changeModalState("editSong")}
          />
        </div>
      </Modal>
      <Modal
        title="Eliminar canción"
        show={activeModals.deleteSong}
        close={changeModalState("deleteSong")}
      >
        <DeleteSong
          data={data}
          status={status}
          close={changeModalState("deleteSong")}
        />
      </Modal>
    </div>
  );
}

const MenuItem = ({ text, children, onClick, color }) => (
  <div
    className={
      color ? classNames(style.optionMenu, style[color]) : style.optionMenu
    }
    onClick={onClick}
  >
    <p className={style.icon}>{children}</p>
    <p className={style.text}>{text}</p>
  </div>
);

const DeleteSong = ({ data, status, close }) => {
  const deleteMusic = async () => {
    try {
      const URL = "http://localhost:8080/api/musica/" + data.id;
      const response = await axios.delete(URL);
      if (response.data) alert("Eliminado correctamente");
    } catch (error) {
      alert("Ocurrio un error al eliminar");
      return null;
    }
    status((prevStatus) => !prevStatus);
    close();
  };

  return (
    <div className={style.contDelete}>
      <p className={style.text}>¿Seguro que quieres eliminar esta canción?</p>
      <p className={style.song}>{data.nombre}</p>
      <button className={style.btnDelete} onClick={deleteMusic}>
        Si, eliminar
      </button>
    </div>
  );
};

export default Music;
