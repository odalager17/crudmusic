import { Form, Formik } from "formik";
import style from "../../assets/styles/form/form.module.css";
import { AddSongInitialState, AddSongValidationSchema } from "../../utils/song";
import Input from "../input/Input";

function FormCreate() {
  const handleSubmit = async (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={AddSongInitialState}
      validationSchema={AddSongValidationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={style.form}>
        <div className={style.contInputs}>
          <Input name="name" title="Nombre de la canción" type="text" />
          <Input name="artist" title="Nombre del artista" type="text" />
          <Input name="type" title="Género" type="text" />
          <Input name="time" title="Duración" type="text" />
        </div>
        <button type="submit" className={style.btnSend}>Guardar</button>
      </Form>
    </Formik>
  );
}

export default FormCreate;
