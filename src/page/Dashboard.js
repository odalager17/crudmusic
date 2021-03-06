import axios from "axios";
import { useState, useEffect } from "react";
import { Plus } from "react-feather";
import style from "../assets/styles/Dashboard.module.css";
import Music from "../components/card/Music";
import Playlist from "../components/card/Playlist";
import FormCreate from "../components/form/FormCreate";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import Modal from "../components/modal/Modal";

const modalStates = { addSong: false };

function Dashboard() {
  const [activeModals, setActiveModals] = useState(modalStates);
  const [musics, setMusics] = useState([]);
  const [refect, setRefect] = useState(false);

  const changeModalState = (modal) => async () => {
    setActiveModals({ ...activeModals, [modal]: !activeModals[modal] });
  };

  useEffect(() => {
    async function getMusics() {
      try {
        const URL = "http://localhost:8080/api/musica";
        const response = await axios.get(URL);
        if (response.data) setMusics(response.data);
      } catch (error) {
        return null;
      }
    }

    getMusics();
  }, [refect]);

  return (
    <div className={style.container}>
      <Menu />
      <div className={style.spacework}>
        <Header setMusics={setMusics} reset={setRefect} />
        <div className={style.contMusic}>
          <div className={style.allMusic}>
            <div className={style.contPlaylist}>
              <Playlist
                namelist="acoustic hits"
                img="https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1578&q=80"
              />
              <Playlist
                namelist="r&b hits"
                img="https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
              />
              <Playlist
                namelist="pop hits"
                img="https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
              />
              <Playlist
                namelist="best 2022"
                img="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
              />
            </div>
            <div className={style.musicRegister}>
              <div className={style.head}>
                <p className={style.title}>M??sica registrada</p>
                <button
                  className={style.btnAdd}
                  onClick={changeModalState("addSong")}
                >
                  <span className={style.icon}>
                    <Plus size={15} />
                  </span>
                  agregar
                </button>
              </div>
              <div className={style.list}>
                {musics.map((data) => (
                  <Music key={data.id} data={data} status={setRefect} />
                ))}
              </div>
            </div>
          </div>
          <div className={style.artist}></div>
        </div>
      </div>
      <Modal
        title="Registrar canci??n"
        show={activeModals.addSong}
        close={changeModalState("addSong")}
      >
        <div className={style.contForm}>
          <FormCreate status={setRefect} close={changeModalState("addSong")} />
        </div>
      </Modal>
    </div>
  );
}

export default Dashboard;
