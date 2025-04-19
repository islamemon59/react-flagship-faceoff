import React, { useEffect, useState } from "react";
import PhoneCard from "../PhoneCard/PhoneCard";
import SharedButton from "../SharedButton/SharedButton";

const PhoneContainer = ({ phones }) => {

    const [displayPhones, setDisplayPhones] = useState([])
    const [showAll, setShowAll] = useState(false)

    useEffect(() => {
        if(showAll){
            setDisplayPhones(phones)
        } else {
            setDisplayPhones(phones.slice(0, 6))
        }
    }, [phones, showAll])

  return (
    <div className="my-20">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-20 gap-10">
        {displayPhones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone}></PhoneCard>
        ))}
      </div>
      <SharedButton onClick={() => {
        setShowAll(!showAll)
        showAll && window.scrollTo(0, 100)
      }} label={showAll ? "Show less" : "Show all"}></SharedButton>
    </div>
  );
};

export default PhoneContainer;
