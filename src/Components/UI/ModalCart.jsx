import { Cart } from "./Cart";

export const ModalCart = ({ setModal, modal, tovari, setTovari }) => {
  if (!modal) return null;
  const handleClose = (e) => {
    if (e.target.id === "exit") {
      setModal(false);
    }
  };
  return (
    <div
      className={
        modal
          ? "fixed inset-0 bg-black bg-opacity-55 flex justify-center items-center z-20"
          : "hidden"
      }
      id="exit"
      onClick={handleClose}>
      <div className="flex flex-col w-[80%] 2xl:w-[60%] h-auto bg-[#1E1E20] rounded-lg p-4">
        <div className="text-white font-light text-2xl flex w-full items-center justify-center h-min relative">
          Ваша корзина
          <img
            src="https://truth.bahamut.com.tw/s01/201906/fc0620fdff9713be4d2e84465bfe62fa.PNG"
            className="w-96 absolute top-[-15px] left-[32.5%] z-[5] invert opacity-20 pointer-events-none select-none"
          />
        </div>
        <div className="flex flex-row w-full h-full p-4 mt-10">
          <div className="w-[70%] bg-[#1E1E20] flex-col gap-4 flex h-[90%] overflow-y-auto">
            {tovari.map((item) => (
              <Cart
                img={item.img}
                title={item.title}
                price={item.price}
                id={item.id}
                key={item.id + 1}
                setTovari={setTovari}
              />
            ))}
          </div>
          <div className="w-[40%] bg-[#2C2C2E] h-[max] rounded-lg p-8 gap-4 flex flex-col justify-between">
            <div className="flex gap-6 flex-col h-min">
              <div className="text-white/80 text-4xl font-light text-center ">
                Позиций: {tovari.length}
              </div>
              <input
                className="text-white/100 bg-[#2C2C2E] outline-none w-full border border-1 opacity-45 focus:opacity-90 focus:border-white/20 duration-500 rounded-lg p-2"
                type={"text"}
                placeholder="Номер телефона"
              />
              <input
                className="text-white/80 bg-[#2C2C2E] outline-none w-full border border-1 opacity-45 focus:opacity-90 focus:border-white/20 duration-500 rounded-lg p-2"
                type={"text"}
                placeholder="Город"
              />
              <input
                className="text-white/80 bg-[#2C2C2E] outline-none w-full border border-1 opacity-45 focus:opacity-90 focus:border-white/20 duration-500 rounded-lg p-2"
                type={"text"}
                placeholder="Электронная почта"
              />
              <input
                className="text-white/80 bg-[#2C2C2E] outline-none w-full border border-1 opacity-45 focus:opacity-90 focus:border-white/20 duration-500 rounded-lg p-2"
                type={"text"}
                placeholder="Промокод"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-white/80 text-4xl text-center font-light w-full flex items-center justify-center line-clamp-1">
                Общая цена: $
                {tovari.reduce((acc, item) => acc + +item.price, 0)}
              </div>
              <div className="w-full flex flex-col">
                <button
                  className="bg-white/20 p-3 rounded-lg hover:bg-white/80 duration-300"
                  onClick={() => alert("Спасибо за покупку!")}>
                  Продолжить оплату
                </button>
                <p className="text-[12px] text-center text-white opacity-20">
                  Нажимая продолжить, вы соглашаетесь с правилами оферты
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
