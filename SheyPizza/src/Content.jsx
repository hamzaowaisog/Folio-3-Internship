import { Card, Select, InputNumber, Button, Row, Col, Modal } from "antd";
import "./content.css";
import { useState } from "react";

export default function PizzaContent() {
  const Pizza = [
    {
      name: "Pepper Barbecue Chicken",
      img: "https://www.dominos.co.in/files/items/Pepper_Barbeque.jpg",
      price: 200,
      description: "Loose yourself in the goodness of delicious Pepper Barbecue Chciken Pizza/ Loaded with Yummy Cheese & Mouth Waterinh Barbeque Chicken",
    },
    {
      name: "Non Veg Supreme",
      img: "https://www.dominos.co.in/files/items/Non-Veg_Supreme.jpg",
      price: 300,
      description : "Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers"
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
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
  return (
    <>
      <Row gutter={[16, 32]} style={{ marginTop: "20px" }}>
        {Pizza.map((pizza, index) => (
          <Col key={index} md={8} sm={24} xs={24}>
            <Card
              title={pizza.name}
              hoverable
              onClick={() =>handleCardClick(pizza)}
              cover={<img src={pizza.img}></img>}
            >
              <p>
                Variants:
                <Select
                  defaultValue={"Small"}
                  style={{ width: "120px" }}
                  onClick={handleChildClick}
                >
                  <Select.Option value="small">Small</Select.Option>
                  <Select.Option value="Medium">Medium</Select.Option>
                  <Select.Option value="Large">Large</Select.Option>
                </Select>
              </p>
              <p>
                Quantity: 
                <InputNumber
                  min={1}
                  max={10}
                  defaultValue={1}
                  onClick={handleChildClick}
                />
              </p>
              <p>Price:{pizza.price} Rs</p>
              <Button type="primary" danger onClick={handleChildClick}>
                ADD TO CART
              </Button>
            </Card>
          </Col>
        ))}
      
      </Row>
      <Modal
        title={modalTitle}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleOk}
        onClose={handleOk}
        footer={[
          <Button key="ok" type="primary" danger onClick={handleOk}>
            Close
          </Button>,
        ]}
      >
        <img src={modalImg} className="card-img"></img>
        <p>{modalDes}</p>
      </Modal>
    </>
  );
}
