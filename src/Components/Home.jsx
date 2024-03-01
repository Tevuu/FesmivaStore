export const Home = () => {
  return (
    <div className="w-screen h-screen">
      <div className="">
        <div className="text-white font-bold text-8xl w-1/4 fixed z-[5] top-[28%] left-[5%]">
          Satan Clan is coming to town
        </div>
        <div className="text-white font-light text-2xl w-1/4 fixed z-[5] top-[58%] left-[5%] opacity-50">
          it does not really matters what struggies you have been in 2024. All
          that matters to be happy! Hope you are all happy!
        </div>
        <a
          href="#shop"
          className="text-black/80 scroll-smooth font-light text-2xl top-[70%] fixed z-[5] left-[5%] bg-white opacity-50  hover:opacity-100 py-2 px-4 rounded-lg duration-700">
          Get the loot!
        </a>
      </div>
      <img
        src="https://i.pinimg.com/originals/8e/a1/e0/8ea1e066ad21ab5174e7bfbd15060596.jpg"
        className=" fixed z-[0] opacity-50 select-none"
      />
    </div>
  );
};
