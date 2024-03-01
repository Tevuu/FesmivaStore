export const Card = ({ img, title, description, price, id, setTovari }) => {
  return (
    <div className="flex flex-col bg-white w-[350px] min-h-[400px] my-20 rounded-lg p-8 items-end hover:scale-105 duration-500 justify-between">
      <div className="flex h-full flex-col justify-between">
        <div className="">
          <img
            src={img}
            className="hover:scale-[1.15] rounded-xl duration-500 z-0"
          />
        </div>
        <div className="flex flex-col gap-2 relative z-10">
          <div className="text-3xl font-black">{title}</div>
          <div className="text-xl opacity-65 font-light">{description}</div>
          <div className="text-xl font-bold">$ {price}</div>
        </div>
      </div>
      <button
        className="bg-[#1E1E20] hover:bg-neutral-400 cursor-pointer duration-300 min-w-12 min-h-12 flex items-center justify-center rounded-full
       text-xl text-white"
        onClick={() =>
          setTovari((prev) => {
            if (prev) {
              if (prev.find((item) => item.id === id)) {
                return prev;
              } else {
                return [...prev, { title, img, price, id }];
              }
            } else return [{ title, img, price, id }];
          })
        }>
        ✚
      </button>
    </div>
  );
};
