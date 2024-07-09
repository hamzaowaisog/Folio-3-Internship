import { useState } from "react";

const useModal = () => {
  const[isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalDes, setModalDes] = useState("");
  const [modalImg, setModalImg] = useState("");

  const showModal = (pizza) => {
    setModalTitle(pizza.name);
    setModalImg(pizza.img);
    setModalDes(pizza.description);

    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCardClick = (pizza) => {
    showModal(pizza);
  };
  const handleChildClick = (e) => {
    e.stopPropagation();
  };

  return {
    isModalOpen,
    modalTitle,
    modalDes,
    modalImg,
    handleOk,
    handleCardClick,
    handleChildClick

  }
};

export default useModal;
