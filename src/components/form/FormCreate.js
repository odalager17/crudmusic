import axios from "axios";
import { Form, Formik } from "formik";
import style from "../../assets/styles/form/form.module.css";
import { AddSongInitialState, AddSongValidationSchema } from "../../utils/song";
import Input from "../input/Input";

function FormCreate({ status, close }) {
  const handleSubmit = async (values) => {
    try {
      const URL = "http://localhost:8080/api/musica";
      const response = await axios.post(URL, values);
      if (response.data) alert("Agregado correctamente");
    } catch (error) {
      alert("Ocurrio un error al agregar");
      return null;
    }
    status(true);
    close();
  };

  return (
    <Formik
      initialValues={AddSongInitialState}
      validationSchema={AddSongValidationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={style.form}>
        <div className={style.contInputs}>
          <Input name="nombre" title="Nombre de la canción" type="text" />
          <Input name="autor" title="Nombre del artista" type="text" />
          <Input name="genero" title="Género" type="text" />
          <Input name="duracion" title="Duración" type="text" />
        </div>
        <button type="submit" className={style.btnSend}>
          Guardar
        </button>
      </Form>
    </Formik>
  );
}

export default FormCreate;
