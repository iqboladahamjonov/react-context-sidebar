import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "./context";
const Home = () => {
  // const data = useContext(AppContext);
  const { openSidebar, openModal } = useGlobalContext();
  // console.log(data);
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
      <aside className="sidebar">home component</aside>
    </main>
  );
};

export default Home;
