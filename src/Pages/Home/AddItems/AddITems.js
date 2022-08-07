import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import "./AddItems.css";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";


const AddITems = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    data.email = user?.email;

    console.log(data);
    const url = `https://peaceful-beyond-14881.herokuapp.com/item`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        e.target.reset();
        toast("Added New Item");
        console.log(result);
      });
  };

  return (
    <div className="login-container">
      <div className="login-title">Item Detail</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Item Name"
          required
          {...register("name", { maxLength: 20 })}
        />
        <textarea
          placeholder="Item description"
          required
          {...register("description")}
        />
        <input
          placeholder="Item price"
          type="number"
          required
          {...register("price")}
        />
        <input
          placeholder="Item quantity"
          type="number"
          required
          {...register("quantity")}
        />
        <input
          placeholder="Supplier Name"
          type="Name"
          required
          {...register("supplier")}
        />
        <input
          placeholder="Photo Url"
          type="text"
          required
          {...register("img")}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddITems;

// const onSubmit = (data,e) => {
//   data.email=user?.email;

//   axios.post('https://peaceful-beyond-14881.herokuapp.com/item', data)
//   .then(Response =>{
//     const {data} = Response;
//     if(data.inserteId){
//       toast('Your item add');
//       e.target.reset()
//     }
//   })
// };
