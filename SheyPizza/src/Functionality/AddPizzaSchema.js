import * as YUP from 'yup';
const AddPizzaSchema = YUP.object({
    name: YUP.string().required("Please Input The Pizza Name!"),
    img: YUP.string().required("Please Input The Image URL!"),
    description: YUP.string().required("Please Input The Description!"),
    variant: YUP.array().of(YUP.object({
        name: YUP.string().required("Please Input The Variant Name!"),
        price: YUP.number().required("Price is required").typeError("Price Must be a number")
    })).min(1,'Please select at least one variant!').required("Please Select Variant"),

});

export default AddPizzaSchema;