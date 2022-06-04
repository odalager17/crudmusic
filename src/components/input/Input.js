import React from "react";
import { useField } from "formik";

import styles from "../../assets/styles/input/Input.module.css";

const Input = ({ title, type, placeholder, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <input
        {...field}
        {...props}
        className={styles.input}
        type={type}
        placeholder={placeholder ? placeholder : "Escribir"}
      />
      {meta.touched && meta.error && (
        <p className={styles.txtWarning}>{meta.error}</p>
      )}
    </div>
  );
};

export default Input;
