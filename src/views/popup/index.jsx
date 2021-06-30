import Wrapper from "../../components/Template/index";
import Popup from "../../components/Popup";
import { useState } from "react";

const items = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/",
  },
  {
    name: "News",
    url: "/",
  },
  {
    name: "Contacts",
    url: "/",
  },
];

export default function App() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <Wrapper>
      <h5>Popup</h5>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-400 rounded-md text-white py-2 px-4 my-2"
          onClick={() => setShowPopup((prev) => !prev)}
        >
          Popup
        </button>
        <Popup isOpen={showPopup} onClose={() => setShowPopup((prev) => !prev)}>
          {items}
        </Popup>
        {/* <Modal
          title="Modal title"
          primaryAction={() => console.log("Action 1")}
          secondaryAction={() => console.log("Action 2")}
          onClose={() => setShowModal((prev) => !prev)}
          isOpen={showModal}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          consequatur quisquam explicabo, consequuntur illo libero.
        </Modal> */}
      </div>
    </Wrapper>
  );
}
