import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { cancelOrderById } from "../../../slices/orderSlice";
import CancelOrder from "./CancelOrder";

const ViewDetail = ({
  amount,
  showDetail,
  setShowDetail,
  productDetail,
  orderInfo,
}) => {
  console.log(productDetail);
  console.log(orderInfo);
  const dispatch = useDispatch();
  const [showCancelOrder, setShowCancelOrder] = useState(false);

  const handleCancelOrder = async (_idProduct) => {
    await dispatch(cancelOrderById(_idProduct));
  };

  return (
    <>
      {showDetail ? (
        <Background>
          <CancelOrder
            orderInfo={orderInfo}
            productDetail={productDetail}
            handleCancelOrder={handleCancelOrder}
            showCancelOrder={showCancelOrder}
            setShowCancelOrder={setShowCancelOrder}
            setShowDetail={setShowDetail}
          ></CancelOrder>
          <DialogWrapper style={{ display: "inline-table" }}>
            <ButtonWhite onClick={() => setShowDetail(false)}>X</ButtonWhite>
            <Title>Your order detail: </Title>
            <div className="cart-info-wrapper">
              <div className="cart-items">
                {productDetail.length > 0 &&
                  productDetail.map((item) => (
                    <div className="cart-item" key={item._id}>
                      <img
                        src={item.Image}
                        alt={item.Name}
                        className="item-img"
                      />
                      <div className="item-info">
                        <p className="name">{item.Name}</p>
                        <p className="kind">{item.Sweet}</p>
                      </div>
                      <span className="price">
                        £{item.Price} x {item.Quantity} = £
                        {Number(item.Quantity * item.Price).toLocaleString(
                          "en-US",
                          {
                            minimumFractionDigits: 2,
                          }
                        )}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
            <div className="sub-total-price">
              <div className="sub-total-wrapper">
                <div className="sub-total">Total</div>
                <div className="item-price-wrapper">
                  <span className="price-total">
                    £
                    {Number(amount).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </div>
              </div>
            </div>
            {orderInfo.orderPayType === "cash" ? (
              <span
                className="btn-cancel-order"
                onClick={() => setShowCancelOrder(true)}
              >
                Cancel Order
              </span>
            ) : (
              ""
            )}
          </DialogWrapper>
        </Background>
      ) : null}
    </>
  );
};

const Background = styled.div`
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 500;
  .cart-info-wrapper {
    margin-top: 20px;
    border-bottom: 1px solid #ccc;
  }
  .cart-items {
    flex-direction: column;
    margin-bottom: 10px;
    display: flex;
  }
  .cart-item {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
  }
  .item-img {
    width: 64px;
    height: 64px;
    border-radius: 8px;
  }
  .item-info {
    margin-left: 14px;
  }
  .name {
    font-size: 1rem;
    font-weight: 600;
    margin-top: 4px;
    margin-bottom: 2px;
  }
  .kind {
    font-size: 0.8rem;
    font-weight: 500;
  }
  .price {
    font-size: 1rem;
    font-weight: 600;
  }
  .price-total {
    font-size: 1.2rem;
    color: #ff01bd;
    font-weight: 600;
  }
  .sub-total-price {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
  }
  .sub-total-price:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }

  .sub-total-wrapper {
    display: flex;
  }
  .sub-total {
    flex-grow: 1;
    font-size: 1.2rem;
    font-weight: 500;
  }
  .btn-cancel-order {
    -webkit-line-clamp: 1;
    font-size: 1rem;
    box-sizing: border-box;
    display: flex;
    border-radius: 2px;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    cursor: pointer;
    height: 40px;
    padding: 5px 5px;
    min-width: 30px;
    outline: 0;
    background: #fff;
    color: #555;
    border: 1px solid rgba(0, 0, 0, 0.09);
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 3%);
    overflow: visible;
    flex: 1;
    :hover {
      /* background: rgba(0, 0, 0, 0.02); */
      background: red;
      color: white;
    }
  }
`;

const DialogWrapper = styled.div`
  background-color: #fff;
  width: 31.25rem;
  padding: 1.25rem;
  overflow: visible;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
  position: relative;
`;
const Title = styled.div`
  font-size: 1.5rem;
  color: #ff01bd;
  margin-top: 1.875rem;
  font-weight: 500;
`;

const ButtonWhite = styled.button`
  -webkit-line-clamp: 1;
  font-size: 1rem;
  box-sizing: border-box;
  display: flex;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  cursor: pointer;
  height: 30px;
  padding: 5px 5px;
  min-width: 30px;
  outline: 0;
  background: #fff;
  color: #555;
  border: 1px solid rgba(0, 0, 0, 0.09);
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 3%);
  position: absolute;
  top: 10px;
  right: 12px;
  overflow: visible;
  flex: 1;
  :hover {
    /* background: rgba(0, 0, 0, 0.02); */
    background: red;
    color: white;
  }
`;

export default ViewDetail;
