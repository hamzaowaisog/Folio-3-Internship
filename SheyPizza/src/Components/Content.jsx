import { Card, Select, InputNumber, Button, Row, Col, Modal } from "antd";
import "../CSS/content.css";
import Pizza from "../Data/PizzaData";
import useModal from "../Functionality/ModalFunction";
import CardFunctionality from "../Functionality/CardFunctionality";


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

  const {
    pizzaStates,
    handleVariantChange,
    handleQuantityChange,
    calculatePrice
  } = CardFunctionality();

  

  return (
    <>
      <Row gutter={[16, 32]} className="row-style">
        {Pizza.map((pizza, index) => (
          <Col key={index} md={8} sm={24} xs={24}>
            <Card
              title={pizza.name}
              hoverable
              onClick={() => 
                handleCardClick(pizza)
              }
              cover={<img src={pizza.img} alt={pizza.name}></img>}
            >
              <p>
                Variants:
                <Select
                  className="Select"
                  defaultValue={pizzaStates[index].variant}
                  onClick={handleChildClick}
                  onChange={(value) => handleVariantChange(index,value)}
                  name="variant"
                >
                  {pizza.variant?.map((variant) => (
                    <Select.Option key={variant.name} value={variant.name}>
                      {variant.name}
                    </Select.Option>
                  ))}
                </Select>
              </p>
              <p>
                Quantity:
                <InputNumber
                  min={1}
                  max={10}
                  defaultValue={1}
                  onClick={handleChildClick}
                  onChange={(value) => handleQuantityChange(index,value)}
                  className="Select"
                />
              </p>
              <p>Price:{calculatePrice(index)} Rs</p>
              <Button
                className="Cart-Button"
                type="primary"
                danger
                onClick={handleChildClick}
              >
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
