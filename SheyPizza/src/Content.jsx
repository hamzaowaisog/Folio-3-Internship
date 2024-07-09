import { Card, Select, InputNumber, Button, Row, Col, Modal } from "antd";
import "./content.css";
import { Pizza } from "./PizzaData";
import { useModal } from "./ModalFunction";

export default function PizzaContent() {
  const {
    isModalOpen,
    modalTitle,
    modalDes,
    modalImg,
    handleOk,
    handleCardClick,
    handleChildClick,
  } = useModal();

  return (
    <>
      <Row
        gutter={[16, 32]}
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        {Pizza.map((pizza, index) => (
          <Col key={index} md={8} sm={24} xs={24}>
            <Card
              title={pizza.name}
              hoverable
              onClick={() => handleCardClick(pizza)}
              cover={<img src={pizza.img}></img>}
              style={{ marginLeft: "20px" }}
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
