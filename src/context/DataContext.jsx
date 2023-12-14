import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";

const DataContext = createContext();

const initalState = {
  cartList: [],
  isLoading: false,
  selectedItem: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "loaded":
      return { ...state, isLoading: false };
    case "Data/users/fetching":
      return { ...state, isLoading: true };

    case "Data/users/fetched":
      return { ...state, users: action.payload, isLoading: false };

    case "Data/products/fetching":
      return { ...state, Data: action.payload, isLoading: true };

    case "Data/products/fetched":
      return { ...state, Data: action.payload, isLoading: false };

    case "cartlist/update":
      return { ...state, cartlist: action.payload };

    case "item/add":
      const existingItem = state.cartList.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (existingItem) {
        const updatedCartList = state.cartList.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        return { ...state, cartList: updatedCartList };
      } else {
        return {
          ...state,
          cartList: [...state.cartList, { ...action.payload, quantity: 1 }],
        };
      }

    case "item/delete":
      const findedItem = state.cartList.find(
        (cartItem) => cartItem.id === action.payload.id && cartItem
      );
      if (findedItem) {
        if (findedItem.quantity <= 1) {
          const updatedCart = state.cartList.filter(
            (cartItem) => cartItem.id !== action.payload.id
          );
          return { ...state, cartList: updatedCart };
        } else {
          const updatedCart = state.cartList.map((cartItem) =>
            cartItem.id === action.payload.id
              ? {
                  ...cartItem,
                  quantity: cartItem.quantity - 1,
                }
              : cartItem
          );
          return { ...state, cartList: updatedCart };
        }
      }
      break;

    case "Data/error":
      return { ...state, error: action.payload };

    case "item/select":
      return { ...state, productInfo: action.payload };

    case "cartlist/sum":
      const updatedCartList = state.cartList?.map((cartItem) => ({
        ...cartItem,
        total: cartItem.quantity * cartItem.price,
      }));

      return { ...state, cartList: updatedCartList };

    default:
      throw new Error("invalid action");
  }
}

function DataProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState([]);

  const [
    { state, isLoading, cartList, selectedItem, products, productInfo, Data,users },
    dispatch,
  ] = useReducer(reducer, initalState);

  useEffect(() => {
    dispatch({ type: "Data/products/fetching" });
    try {
      axios.get("https://fakestoreapi.com/products/").then((response) => {
        dispatch({ type: "Data/products/fetched", payload: response.data });
      });
    } catch (error) {
      dispatch({ type: "Data/error", payload: error.message });
    }
  }, []);

  useEffect(() => {
    dispatch({ type: "Data/users/fetching" });
    try {
      axios.get("https://api.storerestapi.com/users").then((response) => {
        dispatch({ type: "Data/users/fetched", payload: response.data.data });
      });
    } catch (error) {
      dispatch({ type: "Data/error", payload: error.message });
    }
  }, []);

  function deleteHandler(Data) {
    const selectedItem = {
      id: Data.id,
    };

    dispatch({ type: "item/delete", payload: selectedItem });
  }

  function addHandler(Data) {
    const newItemToCart = {
      id: Data.id,
      title: Data.title,
      description: Data.description,
      category: Data.category,
      price: Number(Data.price),
      quantity: Number(1),
    };

    dispatch({ type: "item/add", payload: newItemToCart });
  }

  return (
    <DataContext.Provider
      value={{
        isLoading,
        dispatch,
        selectedItem,
        cartList,
        state,
        deleteHandler,
        addHandler,
        loggedIn,
        Data,
        products,
        user,
        users,
        setUser,
        setLoggedIn,
        productInfo,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

function useData() {
  
  const context = useContext(DataContext);
  if (context === undefined)
    throw new Error("dataContext is used out of its provider");
  return context;
}
export { useData, DataProvider };
