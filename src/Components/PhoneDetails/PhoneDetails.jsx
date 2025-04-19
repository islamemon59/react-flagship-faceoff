import React from "react";
import { useLoaderData, useParams } from "react-router";
import { FaCartPlus } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";
import SharedButton from "../SharedButton/SharedButton";
import { setPhonesToLocalStorage } from "../../Utilities/StorePhone";

const PhoneDetails = () => {
  const phones = useLoaderData();

  const { phoneId } = useParams();
  const convertedId = parseInt(phoneId);

  const singlePhone = phones.find((phone) => phone.id === convertedId);
  console.log(singlePhone);

  const { name, image, brand, model, storage, camera_info, description, id } =
    singlePhone;

    const handleCart = () => {
        setPhonesToLocalStorage(id)
        console.log("button click")
    }

  return (
    <div className=" py-10">
      <div className="flex justify-center items-center">
        <img src={image} alt="Phone" />
      </div>
      <div className="flex justify-between items-center md:flex-row flex-col pt-6">
        <h1 className="lg:text-7xl text-6xl font-light">{name}</h1>
        <div className="lg:mt-0 md:mt-4 mt-4">
          <div className="space-x-4">
              <SharedButton onClick={handleCart} label={<FaCartPlus size={20} />}></SharedButton>
              <SharedButton label={<MdFavorite size={20} />}></SharedButton>
          </div>
        </div>
      </div>
      <div className="space-y-4 mt-8">
        <h2 className="text-4xl font-light">Details:</h2>
        <h3>
          <span className="font-bold">Brand:</span> {brand}
        </h3>
        <h3>
          <span className="font-bold">Model:</span> {model}
        </h3>
        <h3>
          <span className="font-bold">Storage:</span> <span>{storage[0]}</span>{" "}
          <br /> <span className="ml-16">{storage[1]}</span>
        </h3>
        <h3>
          <span className="font-bold">Price:</span>{" "}
          <span>{singlePhone.price["256GB"]}</span> <br />{" "}
          <span className="ml-11">{singlePhone.price["512GB"]}</span>
        </h3>
        <h3>
          <span className="font-bold">Camera Info:</span> {camera_info}
        </h3>
        <h3>
          <span className="font-bold">Description:</span> {description}
        </h3>
      </div>
    </div>
  );
};

export default PhoneDetails;
