import toast from "react-hot-toast"

const getPhonesToLocalStorage = () => {
    const getStorePhones = localStorage.getItem("cart")
    if(getStorePhones){
        const storePhones = JSON.parse(getStorePhones)
        return storePhones
    } else {
        return []
    }
}

const setPhonesToLocalStorage = (id) => {
    const cart = getPhonesToLocalStorage()
    if(cart.includes(id)){
        toast.error("Already Added")
    } else {
        cart.push(id)
        const convertedCart = JSON.stringify(cart)
        localStorage.setItem("cart", convertedCart)
        toast.success("Successfully Added")
    }
}

const removePhonesToLocalStorage = (id) => {
    const cartId = getPhonesToLocalStorage()

    const remainingCart = cartId.filter(cart => cart != id)

    console.log(remainingCart)

    localStorage.setItem("cart", JSON.stringify(remainingCart))
}

export {setPhonesToLocalStorage, getPhonesToLocalStorage, removePhonesToLocalStorage}