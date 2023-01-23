import { useState } from "react";
import { Link } from "react-router-dom";
import { ModalInterface } from "../types";
import Modal from "./Modal";
import Search from "./Search";

export const Navbar = () => {
  const [modalState, setModalState] = useState(false);
  return (
    <div className=" w-ful h-16 flex items-center px-14 justify-between ">
      <Link
        to={"/"}
        className="text-3xl text-indigo-500 font-semibold font-Montesarrat"
      >
        CRUD
      </Link>
      <div className="flex h-12  justify-between">
        <Modal
          titleModal="Look for a movie"
          modalState={modalState}
          setModalState={setModalState}
        >
        <Search/>
        </Modal>
        <Link
          to={"/add-movie"}
          className="hover:bg-indigo-600 ml-2 items-center
            border-2 border-indigo-600 hover:border-2 hover:border-white hover:text-white hover:shadow-md rounded-lg bg-white font-bold text-black py-2 px-2"
        >
          Add Movies
        </Link>
      </div>
    </div>
  );
};
