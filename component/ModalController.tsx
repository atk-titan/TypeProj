"use client";
import { useState } from "react";
import NavBar from "@/component/NavBar";
import Modal from "@/component/Modal";

export default function ModalController() {
  const [modalType, setModalType] = useState("");

  return (
    <>
      <NavBar onAction={setModalType} />

      {modalType === "create" && (
        <Modal
          title="Room Creation"
          placeholder="Default (room123)"
          inputTitle="Room Name (Optional):"
          btnText="Create"
          route=""
          onClose={() => setModalType("")}
        />
      )}

      {modalType === "join" && (
        <Modal
          title="Join Room"
          placeholder="Enter Room ID/name"
          inputTitle="Room Name:"
          btnText="Join"
          route=""
          onClose={() => setModalType("")}
        />
      )}
    </>
  );
}
