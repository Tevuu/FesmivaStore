import { useState } from "react";
import { useEffect } from "react";
import { Category } from "./Category";
import { Card } from "./UI/Card";
import Products from "../Resources/Products.json";

export const Shop = ({ setTovari }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(8);
  const [category, setCategory] = useState("Все");
  const [filter, setFilter] = useState("Категории");
  const getCategory = (text) => {
    setCategory(text);
  };
  const GetFilter2 = (text) => {
    setFilter(text);
  };
  useEffect(() => {
    setData(Products);
  }, []);
  return (
    <div
      id="shop"
      className="min-w-screen min-h-screen bg-[#1E1E20] relative z-[10] rounded-t-[3%] p-8">
      <Category getCategory={getCategory} GetFilter2={GetFilter2} />
      <div className="w-full h-full flex gap-14 flex-row flex-wrap justify-evenly">
        {data
          .sort((a, b) => {
            switch (filter) {
              case "По названию":
                return a.title < b.title ? -1 : 1;
              case "Самые дешевые":
                return a.price - b.price;
              case "Самые дорогие":
                return b.price - a.price;
              case "Категории":
                return a.title < b.title ? -1 : 1;
            }
          })
          .filter((item) => {
            return category != "Все" ? item.category === category : true;
          })
          .slice(0, page)
          .map((item) => (
            <Card
              setTovari={setTovari}
              img={item.img}
              description={item.description}
              price={item.price}
              title={item.title}
              id={item.id}
              key={item.id + 1}
            />
          ))}
      </div>
      <div className="flex items-center justify-center">
        {page >= data.length || data.length < 1 || category != "Все" ? (
          ""
        ) : (
          <button
            className="bg-neutral-400 hover:bg-neutral-100 duration-500 relative z-10 cursor-pointer px-10 py-2 text-lg font-semibold
      hover:shadow-[rgba(255,255,255,_0.5)_0px_0px_20px] rounded-full"
            onClick={() => setPage(page + 8)}>
            Показать еще
          </button>
        )}
      </div>
    </div>
  );
};
