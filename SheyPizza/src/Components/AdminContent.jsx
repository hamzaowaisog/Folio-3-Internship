import {
    Card,
    Select,
    InputNumber,
    Button,
    Row,
    Col,
    Modal,
    message,
  } from "antd";
  import "../CSS/content.css";
  import useModal from "../Functionality/ModalFunction";
  import CardFunctionality from "../Functionality/CardFunctionality";
  import Loader from "./Loader";
  import { useDispatch } from "react-redux";
  import { cartAction } from "../Store/cartSlice";
  
  export default function AdminPizzaContent() {
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
      isError,
      pizzaStates,
      isLoading,
      handleVariantChange,
      handleQuantityChange,
      calculatePrice,
    } = CardFunctionality();
    const dispatch = useDispatch();
  
    // const [messageApi, contextHolder] = message.useMessage();
  
    // const success = () => {
    //   messageApi.open({
    //     type: "success",
    //     content: "Item added to cart",
    //     duration: 5,
    //   });
    // };
  
    if (isLoading) {
      return <Loader />;
    }
  
    return (
      <>
        {isError !== "" && <h2>{isError}</h2>}
        <div>
            <h1 className="heading">Admin Panel</h1>
            <Button className="Cart-Button" type="primary" danger onClick={(event)=>{handleChildClick(event);success}}>Add Pizza</Button>
        </div>
        <Row gutter={[16, 32]} className="row-style">
          {pizzaStates.map((pizza, index) => (
            <Col key={index} md={8} sm={24} xs={24}>
              <Card
                title={pizza.name}
                hoverable
                onClick={() => handleCardClick(pizza)}
                cover={<img src={pizza.img} alt={pizza.name}></img>}
              >
                {/* <p>
                  Variants:
                  <Select
                    className="Select"
                    defaultValue={pizza.selectedVariant}
                    onClick={(event) => {
                      handleChildClick(event);
                    }}
                    onChange={(value, event) => {
                      handleChildClick(event);
                      handleVariantChange(index, value);
                    }}
                    name="variant"
                  >
                    {pizza.variants?.map((variant) => (
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
                    onClick={(event) => {
                      handleChildClick(event);
                    }}
                    onChange={(value) => {
                      handleQuantityChange(index, value);
                    }}
                    className="Select"
                  />
                </p>
                <p>Price:{calculatePrice(index)} Rs</p> */}
                
                {/* <Button
                  className="Cart-Button"
                  type="primary"
                  danger
                  onClick={(event) => {
                    dispatch(
                      cartAction.updatingCart({
                        pizza: pizza,
                        variant: pizzaStates[index].selectedVariant,
                        quantity: pizzaStates[index].quantity,
                      })
                    );
                    handleChildClick(event);
                    success();
                  }}
                >
                  ADD TO CART
                </Button> */}
                <Button className="Cart-Button" type="primary" danger onClick={(event)=>{handleChildClick(event);}}>Edit</Button>    
                <Button className="Delete-Button" type="primary" danger onClick={(event)=>{handleChildClick(event);}}>Delete</Button>
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
  