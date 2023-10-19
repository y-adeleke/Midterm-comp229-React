import { useState } from "react";

const AddProduct = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "",
    quantity: "",
    price: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    alert(JSON.stringify(data));
    console.table(data);
  };

  const cancelHandler = () => {
    setData({
      name: "",
      description: "",
      category: "",
      quantity: "",
      price: "",
    });
  };

  return (
    <div className="container">
      <h1>Add Product</h1>
      <form onSubmit={submitHandler}>
        <input type="text" name="name" placeholder="Name" value={data.name} onChange={changeHandler} />
        <input type="text" name="description" placeholder="Description" value={data.description} onChange={changeHandler} />
        <input type="text" name="category" placeholder="Category" value={data.category} onChange={changeHandler} />
        <input type="number" min={1} name="quantity" placeholder="Quantity" value={data.quantity} onChange={changeHandler} />
        <input type="number" min={1} name="price" placeholder="Price" value={data.price} onChange={changeHandler} />
        <div className="btn-s">
          <button type="submit">Submit</button>
          <button type="button" onClick={cancelHandler}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
