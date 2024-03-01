export const Cart = ({ id, price, title, img, setTovari }) => {
  return (
    <div className="w-[95%] bg-[#2C2C2E] flex flex-row justify-between py-4 px-8 items-center rounded-lg relative text-white ml-2">
      <div>
        <img src={img} className="w-16 h-16 rounded-lg" />
      </div>
      <div className="text-2xl font-light w-[40%] line-clamp-1">{title}</div>
      <div className="text-xl font-bold">$ {price}</div>
      <div
        className=" top-1 right-1 z-30 opacity-55 hover:opacity-90 duration-200 cursor-pointer bg-black/50 h-8 w-8 items-center flex justify-center rounded-full"
        onClick={() =>
          setTovari((prev) => {
            return prev.filter((item) => item.id != id);
          })
        }>
        X
      </div>
    </div>
  );
};
