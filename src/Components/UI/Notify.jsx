export const Notify = ({ tovari }) => {
  return (
    <div className="fixed z-[60] right-1 top-5 flex gap-2 flex-col opacity-100 duration-500">
      {tovari.map((item) => (
        <div className="bg-black/50 w-max h-max duration-500 px-6 py-4 opacity-100 backdrop-blur-xl rounded-lg font-semibold text-xl text-white/90 animate-showBlock">
          Вы добавили товар в корзину
        </div>
      ))}
    </div>
  );
};
