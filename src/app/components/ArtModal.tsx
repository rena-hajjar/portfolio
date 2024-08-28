import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from "@nextui-org/modal";
import React from "react";

export default function ArtModal() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <button onClick={onOpen}>Open blarg</button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        style={{ zIndex: 1000, backgroundColor: "white" }}
      >
        <ModalContent className="modal-content">
          {(onClose) => (
            <>
              <ModalHeader>My Modal 123</ModalHeader>
              <ModalBody>
                <p>Here is my modal.</p>
              </ModalBody>
              <ModalFooter>
                <button onClick={onClose}>Close</button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
