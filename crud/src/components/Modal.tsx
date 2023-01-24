import { ModalInterface } from "../types";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Modal({
  children,
  titleModal,
  modalState,
  setModalState,
}: ModalInterface) {
  return (
    <>
      <div className="">
        <button
          className="hover:bg-indigo-600 h-12
                    border-2 flex items-center justify-between 
                    hover:border-2 hover:border-white hover:text-white hover:shadow-md rounded-lg bg-white font-bold text-black py-2 px-2"
          type="button"
          onClick={() => setModalState(true)}
        >
          <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
          Search
        </button>
      </div>
      {modalState ? (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div
            className="fixed inset-0 w-full h-full bg-black opacity-40"
            onClick={() => setModalState(false)}
          ></div>
          <div className="flex items-center min-h-screen ">
            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
              <div className="mt-3 ">
                <div className="mt-2  text-center ">
                  <h4 className="text-lg font-medium text-gray-800">
                    {titleModal}
                  </h4>
                  {children}
                  <div className="items-center gap-2 mt-3 ">
                    <button
                      className="w-1/4 mt-2 p-2 flex-1  border-indigo-600 text-indigo-500 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                      onClick={() => setModalState(false)}
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
