import { Card, Select, InputNumber, Button, Row, Col,Modal } from "antd";
import "./header.css";
import { useState } from "react";


export default function PizzaContent() {
    const [isModalOpen , setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    }
    const handleOk = () => {
        setIsModalOpen(false);
    }

  return (
    <>
        <Row gutter={[16, 32]} style={{ marginTop: "20px" }}>
          <Col md={8} sm={24} xs={24}>
          <Modal title = "Pizza 1" open={isModalOpen} onOk={handleOk}>
            <p>Pizza 1 Delicious Pizza</p>
          </Modal>
            <Card title="Pizza 1" hoverable onClick={showModal}>
              <p>
                Variants:
                <Select defaultValue={"Small"} style={{ width: "120px" }}>
                  <Option value="small">Small</Option>
                  <Option value="Medium">Medium</Option>
                  <Option value="Large">Large</Option>
                </Select>
              </p>
              <p>
                Quantity:
                <InputNumber min={1} max={10} defaultValue={1} />
              </p>
              <p>Price:200Rs</p>
              <Button type="primary" danger>
                ADD TO CART
              </Button>
            </Card>
          </Col>
          <Col md={8} sm={24} xs={24}>
            <Card title="Pizza 2" hoverable onClick={showModal}>
            </Card>
          </Col>
          <Col md={8} sm={24} xs={24}>
            <Card title="Pizza 1" hoverable></Card>
          </Col>
          <Col md={8} sm={24} xs={24}>
            <Card title="Pizza 1" hoverable></Card>
          </Col>
          <Col md={8} sm={24} xs={24}>
            <Card title="Pizza 1" hoverable></Card>
          </Col>
          <Col md={8} sm={24} xs={24}>
            <Card title="Pizza 1" hoverable></Card>
          </Col>
          <Col md={8} sm={24} xs={24}>
            <Card title="Pizza 1" hoverable></Card>
          </Col>
          <Col md={8} sm={24} xs={24}>
            <Card title="Pizza 1" hoverable></Card>
          </Col>
          <Col md={8} sm={24} xs={24}>
            <Card title="Pizza 1" hoverable></Card>
          </Col>
        </Row>
    </>
  );
}
