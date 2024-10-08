import Modal from "@/components/modal";
import { useState } from "react";

function Test() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Click!!</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h1>모달창</h1>
          <p>모달 내용</p>
        </Modal>
      )}
    </div>
  );
}

export default Test;
