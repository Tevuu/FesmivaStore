import { useState } from "react";

export const Dropdown = ({ GetFilter2 }) => {
  const filters = ["По названию", "Самые дешевые", "Самые дорогие"];
  const [selected, setSelected] = useState("Категории");
  const [open, setOpen] = useState(false);
  return (
    <button
      className="flex flex-col relative"
      onClick={() => setOpen(!open)}
      onDoubleClick={() => {
        setSelected("Категории");
        GetFilter2("Категории");
      }}
      title="Двойной клик чтобы сбросить">
      <div
        className="bg-neutral-400 hover:bg-neutral-100 duration-500 z-10 cursor-pointer px-10 py-2 text-lg font-semibold
  hover:shadow-[rgba(255,255,255,_0.5)_0px_0px_20px] rounded-full ">
        {selected}
      </div>
      <div
        className={`absolute top-[100%] bg-neutral-400 w-full my-2 rounded-lg  ${
          open ? "block" : "hidden"
        }`}>
        {filters.map((item) => (
          <div
            className="p-1 py-2 w-full hover:bg-neutral-100 duration-500 rounded-lg"
            onClick={() => {
              setSelected(item);
              GetFilter2(item);
            }}>
            {item}
          </div>
        ))}
      </div>
    </button>
  );
};
