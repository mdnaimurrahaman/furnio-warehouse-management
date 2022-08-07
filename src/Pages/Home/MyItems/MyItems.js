import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import useItems from "../../../Hooks/useItems";
import ShowMyItems from "../ShowMyItems/ShowMyItems";
import "./MyItems.css";

const MyItems = () => {
  const [myItems, setMyItems] = useState([]);

  const [user] = useAuthState(auth);

  // const [items, setItems] = useItems();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://peaceful-beyond-14881.herokuapp.com/item/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = myItems.filter((item) => item._id !== id);
          setMyItems(remaining);
        });
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    const email = user.email;

    const getItems = async () => {
      const url = `https://peaceful-beyond-14881.herokuapp.com/myItems?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setMyItems(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 403 || error.response.status === 401) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getItems();
  }, [navigate, user]);

  return (
    <div>
      <div className="container">
        <div className="AllItems-section mt-5">
          {myItems.map((item) => (
            <ShowMyItems
              key={item._id}
              item={item}
              handleDelete={handleDelete}
            ></ShowMyItems>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyItems;
