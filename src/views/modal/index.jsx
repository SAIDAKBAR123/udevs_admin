import Wrapper from "../../components/Template/index";
import Modal from "../../components/Modal";
import { useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Wrapper>
      <h5>Modal</h5>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-400 rounded-md text-white py-2 px-4 my-2"
          onClick={() => setShowModal((prev) => !prev)}
        >
          Open modal
        </button>
        <Modal
          title="Modal title"
          primaryAction={() => console.log("Action 1")}
          secondaryAction={() => console.log("Action 2")}
          onClose={() => setShowModal((prev) => !prev)}
          isOpen={showModal}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          consequatur quisquam explicabo, consequuntur illo libero.
        </Modal>
      </div>
    </Wrapper>
  );
}
