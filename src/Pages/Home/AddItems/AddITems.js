import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import "./AddItems.css";
import auth from "../../../firebase.init";

const AddITems = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data,e) => {
      console.log(data)
      const url = `http://localhost:5000/item`;
      fetch(url,{
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res=> res.json())
      .then(result =>{
        e.target.reset()
        console.log(result);
      })
    };

  return (
    <div className="login-container">
      <div className='login-title'>Item Detail</div>
      <form onSubmit={handleSubmit(onSubmit)}>
      {/* <input placeholder="User Email" value={user.email} disabled readOnly {...register("email", { required: true})} /> */}
      <input placeholder="Item Name" {...register("Name", { required: true, maxLength: 20 })} />
      <textarea placeholder="Item description" {...register("description")} />
      <input placeholder="Item price" type="number" {...register("price")} />
      <input placeholder="Item quantity" type="number" {...register("quantity")} />
      <input placeholder="Supplier Name" type="Name" {...register("supplier")} />
      <input placeholder="Photo Url" type="text" {...register("img")} />
      <button type="submit" >Add Item</button>
    </form>
    </div>
  );
};

export default AddITems;
