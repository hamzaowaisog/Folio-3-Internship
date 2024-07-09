import { Card, Select, InputNumber, Button, Row, Col, Modal } from "antd";
import "./content.css";
import { useState } from "react";

export default function PizzaContent() {
  const Pizza = [
    {
      name: "Pepper Barbecue Chicken",
      img: "https://www.dominos.co.in/files/items/Pepper_Barbeque.jpg",
      price: 200,
      description:
        "Loose yourself in the goodness of delicious Pepper Barbecue Chciken Pizza/ Loaded with Yummy Cheese & Mouth Waterinh Barbeque Chicken",
    },
    {
      name: "Non Veg Supreme",
      img: "https://www.dominos.co.in/files/items/Non-Veg_Supreme.jpg",
      price: 300,
      description:
        "Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers",
    },
    {
      name: "Golden Corn Pizza",
      img: "https://www.dominos.co.in//files/items/golden_corn_veg.jpg",
      price: 150,
      description:
        "Corn over the base makes it look beautiful. It is served with tomato sauce and chili flakes are sprinkled over the topping according to the taste. After mixing all the ingredients, it is baked by adding cheese and corn for added flavor to pizza. Corn adds health and sweet taste to the pizza.",
    },
    {
      name: "Jalapeno & Red Paprika Pizza",
      img: "https://www.dominos.co.in/files/items/5_Pepper.jpg",
      price: 200,
      description:
        "This pizza is amazing and can become more delicious if we will add some more cheese in it. Ingredients are yeast, sugar, olive oil, salt, and all-purpose flour in a big bowl. After mixing all the ingredients, it is baked by adding Jalapeno and Paprika with corns over the cheese layer. The base is made crunchy to give it the best taste. It can be made more tasty by sprinkling chili flakes and Oregano as per the taste.",
    },
    {
      name: "Margherita",
      img: "https://www.dominos.co.in/files/items/Margherit.jpg",
      description:
        "The pizza base is made by mixing yeast, sugar, olive oil, salt, and all-purpose flour in a big bowl. After mixing all the ingredients, it is baked by adding the cheese as topping over it. The base is perfectly prepared by adding a single layer of cheese over it. It is a mouth-watering pizza for cheese lovers.",
      price: 150,
    },
    {
      name: "Chicken Pepperoni",
      img: "https://www.dominos.co.in/files/items/Chicken_Golden_Delight.jpg",
      price: 250,
      description:
        "Pepperoni pizza is an American pizza variety which includes one of the country's most beloved toppings. Pepperoni is actually a corrupted form of peperoni (one “p”), which denotes a large pepper in Italian, but nowadays it denotes a spicy salami, usually made with a mixture of beef, pork, and spices.",
    },
    {
      name: "Double Cheese Margherita Pizza",
      img: "https://www.dominos.co.in/files/items/Double_Cheese_Margherita.jpg",
      price: 300,
      description:
        "This is a plain pizza that has cheese on it, which is margherita and is delicious because of the loads of cheese. After mixing all the ingredients, it is baked by adding the cheese as topping over it. The base is perfectly prepared by adding a double layer of cheese over it.",
    },
    {
      name: "Italian Veg",
      img: "https://www.dominos.co.in/files/items/PrimeCheesyL.jpg",
      price: 180,
      description:
        "For these easy appetizer pizzas, pile fresh asparagus, summer squash, tomato, and cheese onto purchased Italian bread shells. Combine the traditional Indian taste with delicious Italian sauces.",
    },
    {
      name: "Chicken Tandoori",
      img: "https://www.dominos.co.in/files/items/Pepper_Barbeque_&_Onion.jpg",
      price: 250,
      description:
        "This is a deluxe pizza loaded with cheese and special tandoori chicken on it. It is delicious because of the Indian mix. After mixing all the ingredients, it is baked by adding the cheese as topping over it. The base is perfectly prepared by adding a double layer of cheese over it.",
    },
    {
      name: "Mexican Green Wave",
      img: "https://img2.exportersindia.com/product_images/bc-full/2018/10/2044906/mexican-green-wave-pizza-1540891420-4420335.jpeg",
      price: 250,
      description: "A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes, and jalapeno with a liberal sprinkling of exotic Mexican herbs."
    },
    {
      name: "Peppy Paneer Pizza",
      img : "https://www.dominos.co.in/files/items/Peppy_Paneer.jpg",
      price : 250,
      description: "Topped with gooey paneer, crunchy capsicum & red paprika. Dive into the exquisite taste of paneer topped on your favorite pizza."
    },
    {
      name: "Chicken Keema Pizza",
      img: "https://www.dominos.co.in/files/items/Non-Veg_Supreme.jpg",
      price: 300,
      description: "A flavorful pizza topped with spicy minced chicken (keema), a blend of aromatic spices, and a perfect balance of savory and zesty flavors",
    }
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
              onClick={() => handleCardClick(pizza)}
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
