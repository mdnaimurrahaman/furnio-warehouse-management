import React from "react";
import { useForm } from "react-hook-form";
import "./AddItems.css";

const AddITems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
  return (
    <div className="login-container">
      <div className='login-title'>Item Detail</div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Item Name" {...register("Name", { required: true, maxLength: 20 })} />
      <input placeholder="Item description" {...register("description")} />
      <input placeholder="Item price" type="number" {...register("price")} />
      <input placeholder="Item quantity" type="number" {...register("quantity")} />
      <input placeholder="Supplier Name" type="Name" {...register("name")} />
      <button type="submit" >Add Item</button>
    </form>
    </div>
  );
};

export default AddITems;
