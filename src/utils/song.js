import * as Yup from "yup";

export const AddSongInitialState = {
  name: "",
  artist: "",
  type: "",
  time: "",
};

export const AddSongValidationSchema = Yup.object({
  name: Yup.string().required("Este campo es requerido"),
  artist: Yup.string().required("Este campo es requerido"),
  type: Yup.string().required("Este campo es requerido"),
  time: Yup.string().required("Este campo es requerido"),
});
