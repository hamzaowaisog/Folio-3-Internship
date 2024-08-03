
const AddPizzaInitital = () =>{
    const initialValues = {
        name: "",
        img: "",
        description: "",
        variant: [
          { name: "Small", price: "" 
    
          },
          {
            name: "Medium",
            price: "",
          },
          {
            name: "Large",
            price: "",
          },
        ],
      };

      return{
        initialValues
      }
}
export default AddPizzaInitital;