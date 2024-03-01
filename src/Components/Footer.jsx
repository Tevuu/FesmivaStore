export const Footer = () => {
  return (
    <div className="w-full h-max  bg-[#1E1E20] relative z-10">
      <div className="flex flex-col items-center justify-center w-full p-2 bg-[#232629] rounded-t-[100%] opacity-75 select-none">
        <div className="text-white/60 font-black drop-shadow-[0_0_5px_rgba(255,255,255,0.99)] text-shadow-white flex items-center gap-1 ">
          FESMIVA
          <img
            src="https://cdn.icon-icons.com/icons2/1313/PNG/512/star5_86442.png"
            className="w-4 h-4 invert animate-pulse"
          />
        </div>
        <div className="text-white/60 font-extralight">Все права защищены.</div>
      </div>
    </div>
  );
};
