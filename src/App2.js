/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import ProductList from "./pages/Admins/List/productList";
import UserList from "./pages/Admins/List/userList";
import AddProduct from "./pages/Admins/Add/addProduct";
import EditProduct from "./pages/Admins/Edit/EditProduct";
import OrderList from "./pages/Admins/List/OrderList";
import Account from "./pages/Clients/Account/Account";
import Cart from "./pages/Clients/Cart/cart";
import HomePage from "./pages/Clients/HomePage/HomePage";
import ListProduct from "./pages/Clients/ListProduct/ListProduct";
import Pay from "./pages/Clients/Payment/Pay";
import ProductDetail from "./pages/Clients/ProductDetail/ProductDetail";
import Search from "./pages/Clients/Search/Search";
import Signin from "./pages/Clients/Signs/signIn";
import Signup from "./pages/Clients/Signs/signUp";
import Protected from "./Protected";
import { getProductInCart } from "./slices/cartSlice";
import CategoryList from "./pages/Admins/List/categoryList";
import AddCategory from "./pages/Admins/Add/addCategory";
import DisableProductList from "./pages/Admins/List/disableProductList";
import OrderHistory from "./pages/Clients/Payment/OrderHistory";
import ProtectedUser from "./ProtectedUser";

//---------------------
function App() {
  const { isAuthenticated } = useSelector((state) => state.account);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthenticated) {
      const fetchData = () => {
        dispatch(getProductInCart());
        // dispatch(getUserAddress());
        // dispatch(getOrdersByUser());
      };
      fetchData();
    }
  }, [isAuthenticated]);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/list-product" element={<ListProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/payment"
        element={
          <ProtectedUser isLoggedIn={isAuthenticated}>
            <Pay />
          </ProtectedUser>
        }
      />
      <Route path="/account" element={<Account />} />
      <Route path="/search" element={<Search />} />
      {/* <Route path="/account/addresses" element={<Addresses />} /> */}
      <Route
        path="/order-history"
        element={
          <ProtectedUser isLoggedIn={isAuthenticated}>
            <OrderHistory />
          </ProtectedUser>
        }
      />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route
        path="/admin/*"
        element={
          <Protected isLoggedIn={isAuthenticated}>
            <ProductList />
          </Protected>
        }
      />
      <Route path="/listproduct/*" element={<ProductList />} />
      <Route path="/disablelistproduct/*" element={<DisableProductList />} />
      <Route path="/listUser/*" element={<UserList />} />
      <Route path="/addproduct/*" element={<AddProduct />} />
      <Route path="/addcategory/*" element={<AddCategory />} />
      <Route path="/editproduct/*" element={<EditProduct />} />
      <Route path="/listorder/*" element={<OrderList />} />
      <Route path="/listcategory/*" element={<CategoryList />} />
    </Routes>
  );
}

export default App;
