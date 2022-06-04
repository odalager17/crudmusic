import { Play } from "react-feather";
import style from "../../assets/styles/card/Playlist.module.css";

function Playlist({ img, namelist }) {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <img className={style.imgPlaylist} src={img} alt="playlist" />
      </div>
      <div className={style.information}>
        <div className={style.contName}>
          <p className={style.type}>Playlist</p>
          <p className={style.name}>{namelist}</p>
        </div>
        <button className={style.btnPlay}>
          <p className={style.icon}>
            <Play size={13} />
          </p>
        </button>
      </div>
    </div>
  );
}

export default Playlist;
