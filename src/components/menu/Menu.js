import style from "../../assets/styles/menu/Menu.module.css";
import {
  Clock,
  Compass,
  Disc,
  Headphones,
  Heart,
  Home,
  LogOut,
  Settings,
} from "react-feather";
import classNames from "classnames";

function Menu() {
  return (
    <div className={style.contMenu}>
      <div className={style.logo}>
        <div className={style.icon}>
          <Headphones />
        </div>
      </div>
      <div className={style.menu}>
        <Option active>
          <Home size={20} />
        </Option>
        <Option>
          <Compass size={20} />
        </Option>
        <Option>
          <Disc size={20} />
        </Option>
        <Option>
          <Clock size={20} />
        </Option>
        <Option>
          <Heart size={20} />
        </Option>
        <Option>
          <Settings size={20} />
        </Option>
      </div>
      <div className={style.logout}>
        <Option>
          <LogOut size={20} />
        </Option>
      </div>
    </div>
  );
}

const Option = ({ children, active }) => (
  <div
    className={active ? classNames(style.option, style.active) : style.option}
  >
    <p className={style.icon}>{children}</p>
  </div>
);

export default Menu;
