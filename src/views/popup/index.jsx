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
        <Popup
          mode="dark"
          isOpen={showPopup}
          onClose={() => setShowPopup((prev) => !prev)}
        >
          {items}
        </Popup>
      </div>
    </Wrapper>
  );
}
