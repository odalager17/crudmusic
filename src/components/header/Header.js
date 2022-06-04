import axios from "axios";
import { useState } from "react";
import { Bell, Search } from "react-feather";
import style from "../../assets/styles/header/Header.module.css";

function Header({ setMusics, reset }) {
  const [search, setSearch] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleChange = (e) => {
    if (e.target.value === "") {
      reset((prevStatus) => !prevStatus);
    }
    setSearch(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const URL = "http://localhost:8080/api/musica";
      const response = await axios.get(URL, { params: { autor: search } });
      if (response.data) {
        setMusics(response.data);
      } else {
        alert("No se encontro a ese artista");
      }
    } catch (error) {
      alert("Ocurrio un error al buscar");
      return null;
    }
  };

  return (
    <div className={style.header}>
      <div className={style.head}>
        <div className={style.welcome}>
          <p className={style.name}>Hola, Juan</p>
          <p className={style.desc}>
            ¡Bienvenido de nuevo! ¿Que quieres oír hoy?
          </p>
        </div>
        <div className={style.contSearch}>
          <div className={style.search}>
            <button className={style.contIcon} onClick={handleSearch}>
              <Search size={15} />
            </button>
            <input
              className={style.input}
              type="text"
              value={search}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              placeholder="buscar por artista"
              autoFocus
            />
          </div>
          <button className={style.notify}>
            <Bell size={20} />
            <div className={style.point}></div>
          </button>
        </div>
      </div>
      <div className={style.profile}>
        <div className={style.photo}>
          <img
            className={style.image}
            src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
        </div>
        <div className={style.user}>
          <p className={style.name}>juan martinez</p>
          <p className={style.mail}>juanmartinez@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
