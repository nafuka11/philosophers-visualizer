import { useState } from "react";
import { ChangelogModal } from "./ChangelogModal";
import "./ChangelogButton.css";

export const ChangelogButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="changelog-button"
        onClick={openModal}
        aria-haspopup="dialog"
        aria-expanded={isModalOpen}
        aria-controls="changelog-modal"
      >
        Changelog
      </button>
      <ChangelogModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};
