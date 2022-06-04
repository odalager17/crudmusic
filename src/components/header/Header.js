import { Bell, Search } from "react-feather";
import style from "../../assets/styles/header/Header.module.css";

function Header() {
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
            <button className={style.contIcon}>
              <Search size={15} />
            </button>
            <input className={style.input} type="text" placeholder="buscar" />
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
