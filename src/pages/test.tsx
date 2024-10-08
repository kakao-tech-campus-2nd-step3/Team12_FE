import Modal from "@/components/modal";
import { useState } from "react";

function Test () {
  const [showModal, setShowModal] = useState(false);
  return (
  <div>
    <button onClick={() => setShowModal(true)}>Click!!</button>
    {
      showModal && <Modal />
    }
  </div>
  )
}

export default Test;