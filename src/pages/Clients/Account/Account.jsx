import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { signout } from "../../../slices/accountSlice";
import { AccountWrapper } from "../../../styles/accountStyle";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { account } = useSelector((state) => state.account);
  console.log(account);
  const notify = (prop) => {
    if (prop) {
      toast.success("🎂 User Logout Success !", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
      });
    } else {
      toast.success("🎂 Admin Logout Success !", {
        autoClose: 1000,
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  const handleLogout = async (e) => {
    e.preventDefault();
    await dispatch(signout());
    notify(1);
    setTimeout(function () {
      navigate("/signin");
    }, 1500);
  };

  return (
    <>
      <ToastContainer />
      <Header />
      <AccountWrapper>
        <main className="main-content" id="MainContent">
          <div className="page-width page-content customers">
            <header className="section-header">
              <h1 className="section-header__title">My account</h1>
              <a
                href="/signin"
                id="customer_logout_link"
                onClick={handleLogout}
              >
                Log out
              </a>
            </header>
            {account.Role === "admin" ? (
              <a href="/admin" className="btn-shopnow">
                Go to Admin page
              </a>
            ) : null}
            <div className="grid">
              <div className="grid__item medium-up--two-thirds">
                <h2 className="h3">Order History</h2>
                <a href="/order-history" className="btn-shopnow">
                  View orders history
                </a>
              </div>
              <div className="grid__item medium-up--one-third">
                <h3>Account details</h3>
                <p className="h5">
                  Welcome <h2>{account?.FullName}!</h2>
                </p>
                <p style={{ marginTop: "20px" }}>
                  Dam Zone <br /> United Kingdom
                </p>
                <p>
                  <a href="/account/addresses" className="text-link">
                    View addresses (1)
                  </a>
                </p>
              </div>
            </div>
          </div>
        </main>
      </AccountWrapper>
      <Footer />
    </>
  );
};

export default Account;
