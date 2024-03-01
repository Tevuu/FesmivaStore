import { Dropdown } from "./UI/Dropdown";

export const Category = ({ getCategory, GetFilter2 }) => {
  const GetFilter = (text) => {
    getCategory(text);
  };
  const wears = ["Все", "Футболки", "Худи", "Штаны", "Шарфы", "Носки"];
  return (
    <div className="w-full h-min flex gap-2 items-center justify-center relative z-10">
      {wears.map((item) => (
        <button
          className="bg-neutral-400 hover:bg-neutral-100 duration-500 relative z-10 cursor-pointer px-10 py-2 text-lg font-semibold
      hover:shadow-[rgba(255,255,255,_0.5)_0px_0px_20px] rounded-full"
          onClick={() => GetFilter(item)}>
          {item}
        </button>
      ))}
      <Dropdown GetFilter2={GetFilter2} />
      <img
        src="https://truth.bahamut.com.tw/s01/201906/fc0620fdff9713be4d2e84465bfe62fa.PNG"
        className="w-96 absolute top-[5px] z-[5] invert opacity-20 pointer-events-none select-none"
      />
    </div>
  );
};
