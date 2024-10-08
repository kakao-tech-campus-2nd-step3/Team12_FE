import Modal from "@/components/modal";
import { useState } from "react";
import styled from "@emotion/styled";

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

function Test() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Click!!</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false) } width="400px" height="400px">
          <StyledContent>
            <h1>모달창</h1>
            <p>모달 내용</p>
          </StyledContent>
        </Modal>
      )}
    </div>
  );
}

export default Test;
