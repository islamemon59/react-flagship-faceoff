
import Banner from "../../Components/Banner/Banner";
import { useLoaderData } from "react-router";
import PhoneContainer from "../../Components/PhoneContainer/PhoneContainer";
import { useState } from "react";

const Home = () => {
    const data = useLoaderData()
    console.log(data)

    const [phones, setPhones] = useState(data)

    const handleSearch = (e, text) => {
        e.preventDefault()

        if(text === "") return setPhones(data)

        const searchedPhones = data.filter(phone => 
        phone.name.toLowerCase().split(" ").includes(text.toLowerCase()) || 
        phone.brand.toLowerCase().split(" ").includes(text.toLowerCase()))

        setPhones(searchedPhones)
    }

  return (
    <div>
        <Banner handleSearch={handleSearch}></Banner>
        <PhoneContainer phones={phones}></PhoneContainer>
    </div>
  );
};

export default Home;
