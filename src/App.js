import { useEffect, useState } from "react";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Shop } from "./Components/Shop";
import { ModalCart } from "./Components/UI/ModalCart";
import { Notify } from "./Components/UI/Notify";

function App() {
  const [modal, setModal] = useState(false);
  const [load, setLoad] = useState(false);
  const [tovari, setTovari] = useState([]);
  useEffect(() => {
    setLoad(!load);
  }, [1]);

  return (
    <div className={`bg-[#1E1E20] ${modal ? "h-0" : ""}`}>
      <Notify tovari={tovari} />
      <div className={`${load ? "opacity-100" : "opacity-0"} duration-[1s]`}>
        {modal ? (
          <ModalCart
            modal={modal}
            setModal={setModal}
            tovari={tovari}
            setTovari={setTovari}
          />
        ) : (
          ""
        )}
      </div>
      <Header setModal={setModal} modal={modal} />
      <div className={`${load ? "opacity-100" : "opacity-0"} duration-[2s]`}>
        <Home />
      </div>
      <Shop setTovari={setTovari} />
      <Footer />
    </div>
  );
}

export default App;
