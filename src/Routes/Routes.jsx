import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import PhoneDetails from "../Components/PhoneDetails/PhoneDetails";
import CartList from "../Pages/CartList/CartList";
import FavoriteList from "../Pages/FavoriteList/FavoriteList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
        hydrateFallbackElement: (
          <p>
            <span className="loading loading-spinner loading-xl text-center relative top-[50%] left-[50%]"></span>
          </p>
        ),
        loader: () => fetch("../Phones.json"),
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/cart",
        hydrateFallbackElement: (
          <p>
            <span className="loading loading-spinner loading-xl text-center relative top-[50%] left-[50%]"></span>
          </p>
        ),
        loader: () => fetch("../Phones.json"),
        Component: CartList,
      },
      {
        path: "/phoneDetails/:phoneId",
        hydrateFallbackElement: (
          <p>
            <span className="loading loading-spinner loading-xl text-center relative top-[50%] left-[50%]"></span>
          </p>
        ),
        loader: () => fetch("../Phones.json"),
        Component: PhoneDetails,
      },
      {
        path: "/favorite",
        Component: FavoriteList,
      },
    ],
  },
]);
