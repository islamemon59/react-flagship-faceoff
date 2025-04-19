import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import toast from 'react-hot-toast';
import {
  getPhonesToLocalStorage,
  removePhonesToLocalStorage,
} from "../../Utilities/StorePhone";
import PhoneCard from "../../Components/PhoneCard/PhoneCard";
import SharedButton from "../../Components/SharedButton/SharedButton";

const CartList = () => {
  const data = useLoaderData();

  const [phones, setPhones] = useState([]);

  console.log(phones);

  useEffect(() => {
    const cart = getPhonesToLocalStorage();
    const convertedCart = cart.map((id) => parseInt(id));
    const getPhones = data.filter((phone) => convertedCart.includes(phone.id));
    setPhones(getPhones);
  }, [data]);

  const handleRemove = (id) => {
    removePhonesToLocalStorage(id);

    const cartId = getPhonesToLocalStorage();
    const remainingCart = data.filter((phone) => cartId.includes(phone.id));
    setPhones(remainingCart);
    toast.success('You removed one item!')
};

  return (
    <div className="lg:py-10 md:py-8 py-6">
      {phones.length < 1 ? (
        <div className="text-center md:text-6xl text-4xl flex justify-center flex-col space-y-5 pt-10">
          <span>Please Select Item </span>
          <span>To See Cart List</span>{" "}
          <Link to="/">
            <div>
              <SharedButton label="Home"></SharedButton>
            </div>
          </Link>{" "}
        </div>
      ) : (
        phones.map((phone) => (
          <div className="mb-14">
            <PhoneCard
              phone={phone}
              isDelete={true}
              handleRemove={handleRemove}
            ></PhoneCard>
          </div>
        ))
      )}
    </div>
  );
};

export default CartList;
