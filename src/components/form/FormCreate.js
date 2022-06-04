import { Formik } from "formik";
import style from "../../assets/styles/form/form.module.css";
import Input from "../input/Input";

function FormCreate() {
  return (
    <Formik>
      <form className={style.form}>
        <div className={style.contInputs}>
          <Input name="name" title="Nombre de la canción" type="text" />
          <Input name="artist" title="Nombre del artista" type="text" />
          <Input name="type" title="Género" type="text" />
          <Input name="time" title="Duración" type="text" />
        </div>
        <button className={style.btnSend}>Guardar</button>
      </form>
    </Formik>
  );
}

export default FormCreate;
