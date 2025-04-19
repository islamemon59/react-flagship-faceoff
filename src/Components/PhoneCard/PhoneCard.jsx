import React from "react";
import { Link } from "react-router";
import { TbTrashXFilled } from "react-icons/tb";
import SharedButton from "../SharedButton/SharedButton";

const PhoneCard = ({ phone, isDelete, handleRemove }) => {
  //   console.log(phone);
  const { image, name, description, id,} = phone;
  return (
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img src={image} alt="Phone" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link to={`/phoneDetails/${id}`}>
              <button className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  View Details
                </span>
              </button>
            </Link>
          </div>
        </div>
        {isDelete && <div onClick={()=> handleRemove(id)} className="absolute md:-top-6 md:-right-6 bottom-0"><SharedButton className="absolute" label={<TbTrashXFilled />}></SharedButton></div>}
      </div>

  );
};

export default PhoneCard;
