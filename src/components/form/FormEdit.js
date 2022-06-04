import axios from "axios";
import { Form, Formik } from "formik";
import style from "../../assets/styles/form/form.module.css";
import { AddSongValidationSchema } from "../../utils/song";
import Input from "../input/Input";

function FormEdit({ data, status, close }) {
  const handleSubmit = async (values) => {
    try {
      const URL = "http://localhost:8080/api/musica/" + data.id;
      const response = await axios.put(URL, values);
      if (response.data) alert("Actualizado correctamente");
    } catch (error) {
      alert("Ocurrio un error al actualizar");
      return null;
    }
    status((prevStatus) => !prevStatus);
    close();
  };

  return (
    <Formik
      initialValues={data}
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

export default FormEdit;
