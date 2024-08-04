import { Card, Button, Row, Col, Modal, message } from "antd";
import "../CSS/content.css";
import useModal from "../Functionality/ModalFunction";
import CardFunctionality from "../Functionality/CardFunctionality";
import Loader from "./Loader";
import { useDispatch } from "react-redux";
import { DeletePizzaData } from "../API/Deletedata";
import { fetchPizzaData } from "../API/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
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

  const location = useLocation();

  const { isError, pizzaStates, isLoading } = CardFunctionality();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async (pizzaId) => {
    try {
      await DeletePizzaData(pizzaId);
      message.success("Pizza deleted successfully");
      dispatch(fetchPizzaData("/Pizza"));
    } catch (error) {
      message.error("Failed to delete pizza");
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {isError !== "" && <h2>{isError}</h2>}
      <div>
        <h1 className="heading">Admin Panel</h1>
        <Button
          className="Cart-Button"
          type="primary"
          danger
          onClick={() => {
            navigate("/addPizza");
            console.log(location);
          }}
        >
          Add Pizza
        </Button>
      </div>
      <Row gutter={[16, 32]} className="row-style">
        {pizzaStates.map((pizza) => (
          <Col key={pizza.id} md={8} sm={24} xs={24}>
            <Card
              title={pizza.name}
              hoverable
              onClick={() => handleCardClick(pizza)}
              cover={<img src={pizza.img} alt={pizza.name}></img>}
            >
              {console.log(pizza.id)}
              <Button
                className="Cart-Button"
                type="primary"
                danger
                onClick={(event) => {
                  handleChildClick(event);
                  navigate(`/editPizza/${pizza.id}`);
                }}
              >
                Edit
              </Button>
              <Button
                className="Delete-Button"
                type="primary"
                danger
                onClick={(event) => {
                  handleChildClick(event);
                  handleDelete(pizza.id);
                }}
              >
                Delete
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
