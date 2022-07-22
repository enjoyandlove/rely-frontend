import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
const BoardUser = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
  }, []);
  return (
    <div className="container max-w-none mx-auto board-user">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-2 board-grid">
          <div className="col-span-3 box shadow">
            <h2>
              <i className="fa-solid fa-wallet"></i> Net Worth
            </h2>
            <p>
              5845,56.25 <span>USD</span>
            </p>
          </div>
          <div className="col-span-3 box shadow">
            <h2>
              <i className="fa-solid fa-sack-dollar"></i> Staked
            </h2>
            <p>
              1845,16.05 <span>USD</span>
            </p>
          </div>
          <div className="col-span-3 box shadow">
            <h2>
              <i className="fa-solid fa-piggy-bank"></i> Yield
            </h2>
            <p className="green">
              + 45,65 <span>USD</span>
            </p>
          </div>
          <div className="col-span-3 box shadow">
            <h2>
              <i className="fa-solid fa-chart-line"></i> APY
            </h2>
            <p>12%</p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 board-secondary-grid">
          <div className="col-span-4 box staking-box shadow">
            <h2>Stake USDT</h2>
            <Form>
              <div className="form-group">
                <Input
                  type="text"
                  className="form-control"
                  name="amount"
                  value="0.00"
                  placeholder="0.00"
                />
              </div>
              <p>25% unstaking fee until 10 days</p>
              <button className="btn-stake">
                <span>Stake</span>
              </button>
              <button className="btn-unstake">
                <span>Withdraw</span>
              </button>
            </Form>
          </div>
          <div className="col-span-8 box history-box shadow">
            <h2>Actividad reciente</h2>
            <div className="grid grid-cols-12 transaction">
              <div className="col-span-10"><i className="fa-solid fa-circle-up"></i> Ingreso de dinero</div>
              <div className="col-span-2"><span className="green">+ $2.000</span></div>
            </div>
            <div className="grid grid-cols-12 transaction">
              <div className="col-span-10"><i className="fa-solid fa-circle-down"></i> Retiro de dinero</div>
              <div className="col-span-2"><span className="red">- $2.000</span></div>
            </div> 
            <div className="grid grid-cols-12 transaction">
              <div className="col-span-10"><i className="fa-solid fa-circle-up"></i> Ingreso de dinero</div>
              <div className="col-span-2"><span className="green">+ $12.000</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BoardUser;
