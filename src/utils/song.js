import * as Yup from "yup";

export const AddSongInitialState = {
  nombre: "",
  autor: "",
  genero: "",
  duracion: ""
};

export const AddSongValidationSchema = Yup.object({
  nombre: Yup.string().required("Este campo es requerido"),
  autor: Yup.string().required("Este campo es requerido"),
  genero: Yup.string().required("Este campo es requerido"),
  duracion: Yup.string().required("Este campo es requerido")
});
