export const Header = ({ setModal, modal }) => {
  return (
    <div>
      <div className="fixed z-[2] top-[2%] left-[5%] font-black text-white text-3xl animate-pulse duration-1000 ">
        FESMIVA STORE.
      </div>
      <div className="w-full fixed z-[4]">
        <div className="">
          <div className="flex justify-center items-center my-4">
            <div className="text-white bg-[#2F3237] flex rounded-full p-2 w-1/4 hover:w-1/3 items-center opacity-40 hover:opacity-100 duration-700">
              <div className="flex gap-4 w-full justify-center">
                <button
                  className="hover:bg-[#3a3d44] px-3 duration-300 rounded-lg text-lg font-medium cursor-pointer "
                  onClick={() => setModal(!modal)}>
                  Cart
                </button>
                <a className=" hover:bg-[#3a3d44] px-3 duration-300 rounded-lg text-lg font-medium cursor-pointer">
                  Contacts
                </a>
                <a className=" hover:bg-[#3a3d44] px-3 duration-300 rounded-lg text-lg font-medium cursor-pointer">
                  Products
                </a>
                <a className="hover:bg-[#3a3d44] px-2 duration-300 rounded-lg text-lg font-medium cursor-pointer">
                  Auth
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
